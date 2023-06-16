const parseDate = (date) => {
  const regexp = /\b(\d{2,4})-(0?[1-9]|\d{2})-(0?[1-9]|\d{2})\b/;
  return date.replace(regexp, '$3.$2.$1');
};

const findDataByQuery = (inputData, query) => {
  const outData = [];

  for (let i = 0; i < inputData.length; i++) {
    const objValues = Object.values(inputData[i]);

    for (let j = 0; j < objValues.length; j++) {
      if (objValues[j].toLowerCase().includes(query.toLowerCase())) {
        outData.push(...objValues);
      }
    }
  }

  return outData;
};

export { parseDate, findDataByQuery };
