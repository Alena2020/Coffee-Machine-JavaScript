const input = require('sync-input');
let mlOfWater = input("Write how many ml of water the coffee machine has:");
let mlOfMilk = input("Write how many ml of milk the coffee machine has:");
let gramsOfCoffeeBeans = input("Write how many grams of coffee beans the coffee machine has:");
let cups = Number(input("Write how many cups of coffee you will need:"));
let cupsCoffee = Math.min(parseInt(mlOfWater / 200), Math.min(parseInt(mlOfMilk / 50), parseInt(gramsOfCoffeeBeans / 15)));

function checkAmount() {
  if (cupsCoffee === cups) {
    console.log("Yes, I can make that amount of coffee");  
  } else if (cupsCoffee - cups >= cups) {
    console.log(`Yes, I can make that amount of coffee (and even ${cupsCoffee - cups} more than that)`);
  } else {
    console.log(`No, I can make only ${cupsCoffee} cups of coffee`);
  } 
}

checkAmount();