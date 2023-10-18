const orderTotal = require('./orderTotal');

it('works', () => {
  expect(1).toBe(1);
});

it('Quantity', () => {
  expect(
    orderTotal({
      items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
    })
  ).toBe(6);
});

if (
  orderTotal({
    items: [
      { name: 'Dragon food', price: 8 },
      { name: 'Dragon cage (small)', price: 800 },
    ],
  }) !== 808
) {
  throw new Error('Check fail: Happy path (Example 1)');
}

if (
  orderTotal({
    items: [{ name: 'Dragon candy', price: 3 }],
  }) !== 3
) {
  throw new Error('Check fail: No quantity specified');
}

if (
  orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ],
  }) !== 60
) {
  throw new Error('Check fail: Happy path (Example 2)');
}
