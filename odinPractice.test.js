import { capitalize, reverseString } from './odinPractice';

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
