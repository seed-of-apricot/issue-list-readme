import * as github from '@actions/github';
import * as core from '@actions/core';
import { readFileSync, readdirSync, readFile } from 'fs';

const getContents = async () => {
  try {
    const token = core.getInput('GITHUB_TOKEN');
    const labels = core.getInput('labels');
    const octokit = new github.GitHub(token);

    console.log('1');
    console.log('GitHub client has been initialized.');
    console.log('2');

    const repository = github.context.repo;

    const list = await octokit.issues.listForRepo({
      ...repository,
      state: 'all',
      labels
    });
    const readme = readFile('../README.md', (data: any) => {
      console.log(data);
      console.log('3');
    });
    const arrayOfFiles = readdirSync('../');
    console.log(arrayOfFiles);
    const arrayOfFiles2 = readdirSync('./');
    console.log(arrayOfFiles2);

    return {
      issues: list.data,
      readme: readme
    };
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default getContents;
