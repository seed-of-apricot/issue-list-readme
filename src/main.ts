import * as core from '@actions/core';
import modifyReadme from './modifyReadme';
import { writeFile } from 'fs';

async function run(): Promise<void> {
  try {
    const newReadme = await modifyReadme();
    console.log(newReadme);
    writeFile('./README.md', newReadme, () =>
      console.log('New file has been written.')
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
