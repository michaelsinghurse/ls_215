// inventory_item_availability.js

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => transaction.id === inventoryItem);
}

function isItemAvailable(itemId, transactions) {
  let items = transactionsFor(itemId, transactions);

  let quantity = items.reduce((total, item) => {
    total += (item.movement === "in") ? item.quantity : -1 * item.quantity;
    return total;
  }, 0);

  return quantity > 0;
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions) === false);
console.log(isItemAvailable(105, transactions) === true);
