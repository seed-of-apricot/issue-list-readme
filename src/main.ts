import * as core from '@actions/core';
import modifyReadme from './modifyReadme';

async function run(): Promise<void> {
  try {
    const newReadme = await modifyReadme();
    // await writeReadme(newReadme);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
