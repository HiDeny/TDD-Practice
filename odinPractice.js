// Takes a string and returns it with the first character capitalized.
export const capitalize = (str) => {
  const strSplit = str.split('');
  strSplit[0] = strSplit[0].toUpperCase();
  return strSplit.join('');
};

// Takes a string and returns it reversed.
export const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString('Test'));
