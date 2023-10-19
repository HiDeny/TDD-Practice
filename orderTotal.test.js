const orderTotal = require('./orderTotal');

it('works', () => {
  expect(1).toBe(1);
});

it('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

it('Quantity', () => {
  expect(
    orderTotal({
      items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
    })
  ).toBe(6);
});

it('Happy path 1', () => {
  expect(
    orderTotal({
      items: [
        { name: 'Dragon food', price: 8 },
        { name: 'Dragon cage (small)', price: 800 },
      ],
    })
  ).toBe(808);
});

it('Happy path 2', () => {
  expect(
    orderTotal({
      items: [
        { name: 'Dragon collar', price: 20, quantity: 1 },
        { name: 'Dragon chew toy', price: 40, quantity: 1 },
      ],
    })
  ).toBe(60);
});

it('No quality specified', () => {
  expect(
    orderTotal({
      items: [{ name: 'Dragon candy', price: 3 }],
    })
  ).toBe(3);
});
