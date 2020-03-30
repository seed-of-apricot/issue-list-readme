import * as github from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  try {
    const token = core.getInput('token');
    console.log('repository');

    const repository = github.context.repo;

    console.log(repository);
  } catch (error) {
    console.log(error);
    core.setFailed(error);
  }
};

export default getIssues;
