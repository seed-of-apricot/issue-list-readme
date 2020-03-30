import * as core from '@actions/core';
import getIssues from './github';

async function run(): Promise<void> {
  try {
    getIssues();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
