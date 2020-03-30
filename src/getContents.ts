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
    return { issues: list, readme: readme.data.content };
  } catch (error) {
    core.setFailed(error.message);
  }
};

export default getContents;
