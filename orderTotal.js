// Unit testing

function orderTotal(currentOrder) {
  return currentOrder.items.reduce(
    (prev, cur) => cur.price * (cur.quantity || 1) + prev,
    0
  );
}

module.exports = orderTotal;
