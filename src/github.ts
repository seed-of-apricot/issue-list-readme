import * as github from '@actions/github';
import * as core from '@actions/core';

const getIssues = async () => {
  const token = core.getInput('token');

  const repository = github.context.payload.repository;

  console.log(repository);
};

export default getIssues;
