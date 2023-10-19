import {
  capitalize,
  reverseString,
  calculator,
  caesarCipherDecoder,
  analyzeArray,
} from './odinPractice';

// Takes a string and returns it with the first character capitalized.
it('Capitalize1', () => {
  expect(capitalize('test')).toBe('Test');
});

it('Capitalize2', () => {
  expect(capitalize('monitor')).toBe('Monitor');
});

it('Capitalize3', () => {
  expect(capitalize('jest')).toBe('Jest');
});

// Takes a string and returns it reversed.
it('Reverse String', () => {
  expect(reverseString('computer')).toBe('retupmoc');
});

it('Reverse String', () => {
  expect(reverseString('telephone')).toBe('enohpelet');
});

it('Reverse String', () => {
  expect(reverseString('Stoic')).toBe('ciotS');
});

// Contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

it('Calculator: contain operations', () => {
  expect(calculator).toHaveProperty('add');
  expect(calculator).toHaveProperty('subtract');
  expect(calculator).toHaveProperty('divide');
  expect(calculator).toHaveProperty('multiply');
});

it('Calculator: add', () => {
  expect(calculator.add(10, 10)).toBe(20);
});

it('Calculator: subtract', () => {
  expect(calculator.subtract(10, 10)).toBe(0);
});

it('Calculator: divide', () => {
  expect(calculator.divide(10, 10)).toBe(1);
});

it('Calculator: multiply', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});

it('Calculator: multiply', () => {
  expect(calculator.multiply(10, 100)).toBe(1000);
});

// takes a string and a shift factor and returns it with each character “shifted”.
it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('z', 1)).toBe('a');
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('A', 1)).toBe('B');
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('.,?!', 1)).toBe('.,?!');
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('hello', 3)).toBe('khoor');
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('openai', 5)).toBe('tujsfn');
});

it('Cesar Cipher', () => {
  expect(caesarCipherDecoder('example', 7)).toBe('lehtwsl');
});

// takes an array of numbers and returns an object with the following properties: average, min, max, and length.
it('Analyze Array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it('Analyze Array', () => {
  const object = analyzeArray([1, 10, 3, 4, 2, 6]);
  expect(object.max).toBe(10);
});

it('Analyze Array', () => {
  const object = analyzeArray([1, 10, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});


