const palindrome = (word) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const minClassic = (a, b) => {
  if (a <= b) {
    return a;
  }

  return b;
};

const maxClassic = (a, b) => {
  if (a >= b) {
    return a;
  }

  return b;
};

const minTernary = (a, b) => (a <= b ? a : b);
const maxTernary = (a, b) => (a >= b ? a : b);

const arr = [9, 100, 74, 71, 66, 38, 30, 56, 20, 2];

const replaceZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      let zeros = 0;
      let currNumber = arr[i];

      while (currNumber % 10 === 0) {
        zeros++;
        currNumber /= 10;
      }

      currNumber = arr[i];
      currNumber /= 10 ** zeros;

      for (let j = 0; j < zeros; j++) {
        currNumber += 'zero';
      }

      arr[i] = currNumber;
    }
  }

  return arr;
};

console.log(replaceZeros(arr));
