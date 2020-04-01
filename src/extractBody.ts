import * as core from '@actions/core';
import getIndices from './getIndices';

const extractBody = async (text: string) => {
  const pattern = core.getInput('pattern');
  const [firstIndex, lastIndex] = await getIndices(text, pattern);

  if (firstIndex === -1 || lastIndex === -1) {
    console.log('No pattern matches. Returning the entire body.');
    return text;
  }

  return text.substring(firstIndex + 1, lastIndex - 1);
};

export default extractBody;
