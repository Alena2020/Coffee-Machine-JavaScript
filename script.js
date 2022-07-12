const input = require('sync-input');

// console.log(`Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!`);

console.log("Write how many cups of coffee you will need:");
let cups = input();
console.log(`For ${cups} cups of coffee you will need:
${cups * 200} ml of water
${cups * 50} ml of milk
${cups * 15} g of coffee beans`);