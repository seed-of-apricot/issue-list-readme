import * as github from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  try {
    const token = core.getInput('token');
    core.debug('repository');

    const repository = github.context.repo;

    core.debug(repository.repo);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
};

export default getIssues;
