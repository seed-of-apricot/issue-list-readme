import * as github from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  try {
    const token = core.getInput('token');
    const octokit = new github.GitHub(token);
    console.log('octokit initialized');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo(repository);

    console.log('issues found');
    return list;
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
};

export default getIssues;
