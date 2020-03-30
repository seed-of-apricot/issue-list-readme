import * as github from '@actions/github';
import * as core from '@actions/core';

const getContents = async () => {
  try {
    const token = core.getInput('token');
    const octokit = new github.GitHub(token);
    core.debug('octokit initialized');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo(repository);
    const readme = await octokit.repos.getReadme(repository);

    core.debug('issues found');
    return { issues: list, readme: readme.data.content };
  } catch (error) {
    core.setFailed(error.message);
  }
};

export default getContents;
