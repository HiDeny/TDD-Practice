// Takes a string and returns it with the first character capitalized.
export const capitalize = (str) => {
  const strSplit = str.split('');
  strSplit[0] = strSplit[0].toUpperCase();
  return strSplit.join('');
};

// Takes a string and returns it reversed.
export const reverseString = (str) => str.split('').reverse().join('');

// Contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.
export const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

// takes a string and a shift factor and returns it with each character “shifted”.
export const caesarCipherDecoder = (str, key) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpperCase = alphabet.toUpperCase();
  let result = '';

  const stringSplit = str.split('');

  stringSplit.forEach((letter) => {
    let index = alphabet.indexOf(letter);
    let indexUpper = alphabetUpperCase.indexOf(letter);

    if (index == -1 && indexUpper == -1) result += letter;

    if (index > -1 && indexUpper == -1) {
      let newIndex = (index + key) % 26;
      result += alphabet[newIndex];
    }
    if (index == -1 && indexUpper > -1) {
      let newIndex = (indexUpper + key) % 26;
      result += alphabetUpperCase[newIndex];
    }
  });

  return result;
};

// takes an array of numbers and returns an object with the following properties:
//* average, min, max, and length.

export const analyzeArray = (arr) => {
  const sum = arr.reduce((acc, current) => acc + current, 0);
  console.log(sum);

  return {
    average: Math.floor(sum / arr.length),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
console.log(analyzeArray([10, 8, 3, 4, 2, 6]));

