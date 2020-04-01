import * as github from '@actions/github';
import * as core from '@actions/core';

const getContents = async () => {
  try {
    const token = core.getInput('GITHUB_TOKEN');
    const labels = core.getInput('labels');
    const octokit = new github.GitHub(token);

    console.log('GitHub client has been initialized.');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo({
      ...repository,
      state: 'all',
      labels
    });
    const readme = await octokit.repos.getReadme(repository);

    return {
      issues: list.data,
      readme: Buffer.from(readme.data.content, 'base64').toString('UTF-8')
    };
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default getContents;
