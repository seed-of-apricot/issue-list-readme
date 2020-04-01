import * as core from '@actions/core';
import createTableContents from './createTableContents';
import getContents from './getContents';
import getIndices from './getIndices';

const modifyReadme = async () => {
  try {
    const pattern = core.getInput('pattern');
    const contents = await getContents();

    console.log('Contents has been retrieved.');

    const [firstIndex, lastIndex] = await getIndices(contents.readme, pattern);

    if (firstIndex === -1 || lastIndex === -1) {
      core.setFailed('notValidIndexException');
      throw 'notValidIndexException';
    }

    const beforeTable = contents.readme.substring(0, firstIndex);
    const afterTable = contents.readme.substring(lastIndex);

    console.log('Table wrapper has been identified.');

    const table = await createTableContents(contents.issues);

    console.log('Table has been created.');

    return beforeTable + '\n\n' + table + '\n' + afterTable;
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default modifyReadme;
