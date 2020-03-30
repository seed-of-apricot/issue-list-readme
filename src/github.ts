import * as github from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  const token = core.getInput('token');
  console.log('repository');

  const repository = github.context.repo;

  console.log(repository);
};

export default getIssues;
