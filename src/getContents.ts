import * as github from '@actions/github';
import * as core from '@actions/core';

const getContents = async () => {
  try {
    const token = core.getInput('GITHUB_TOKEN');
    const octokit = new github.GitHub(token);
    console.log('octokit initialized');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo(repository);
    const readme = await octokit.repos.getReadme(repository);

    console.log('issues found');
    return {
      issues: list.data,
      readme: new Buffer(readme.data.content, 'base64').toString('UTF-8')
    };
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default getContents;
