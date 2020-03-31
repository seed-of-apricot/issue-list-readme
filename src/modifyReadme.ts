import * as core from '@actions/core';
import createTableContents from './createTableContents';
import getContents from './getContents';

const modifyReadme = async () => {
  try {
    const pattern = core.getInput('pattern');
    const contents = await getContents();

    const firstIndex = contents.readme.indexOf(pattern);
    const lastIndex = contents.readme.lastIndexOf(pattern);

    if (firstIndex === -1 || lastIndex === -1) {
      core.setFailed('notValidIndexException');
      throw 'notValidIndexException';
    }

    const beforeTable = contents.readme.substring(
      0,
      firstIndex + pattern.length
    );

    const afterTable = contents.readme.substring(
      contents.readme.lastIndexOf(pattern)
    );

    const table = await createTableContents(contents.issues);

    return beforeTable + '\n\n' + table + '\n' + afterTable;
  } catch (error) {
    core.setFailed(error.message);
    throw error.message;
  }
};

export default modifyReadme;
