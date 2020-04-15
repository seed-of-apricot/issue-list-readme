import * as github from '@actions/github';
import * as core from '@actions/core';
import { readFileSync } from 'fs';

const getContents = async () => {
  try {
    const token = core.getInput('GITHUB_TOKEN');
    const labels = core.getInput('labels');
    const state = core.getInput('state') as 'open' | 'closed' | 'all';
    const octokit = new github.GitHub(token);

    console.log('GitHub client has been initialized.');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo({
      ...repository,
      state,
      labels
    });
    const readme = readFileSync('./README.md');

    return {
      issues: list.data,
      readme: readme.toString()
    };
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default getContents;
