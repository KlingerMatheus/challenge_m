function stringContainsNumber(string) {
  return /\d/.test(string);
}

function someFieldIsEmpty(data) {
  const VALUES = Object.values(data);
  let count = 0;

  const RESPONSE = VALUES.map((item) => {
    const ITEM_VALUES = Object.values(item);

    for (count; count <= ITEM_VALUES.length - 1; count++) {
      if (ITEM_VALUES[count].length === 0) return true;
    }
    return false;
  });

  for (count = 0; count < RESPONSE.length; count++) {
    if (RESPONSE[count] === true) return true;
  }
}

function isZipValid(zip) {
  if (isNaN(zip)) return false;
  else return true;
}

module.exports = { stringContainsNumber, someFieldIsEmpty, isZipValid };
