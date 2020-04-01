const getIndices = async (text: string, pattern: string) => {
  const firstIndex = text.indexOf(pattern);
  const lastIndex = text.lastIndexOf(pattern);

  return [firstIndex + pattern.length, lastIndex];
};

export default getIndices;
