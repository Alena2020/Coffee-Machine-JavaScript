const input = require('sync-input');
let mlOfWater = 400;
let mlOfMilk = 540;
let gramsOfCoffeeBeans = 120;
let disposableCups = 9;
let money = 550;

function  printTheStateOfTheCoffeeMachine() {
  console.log(`The coffee machine has:
  ${mlOfWater} ml of water
  ${mlOfMilk} ml of milk
  ${gramsOfCoffeeBeans} g of coffee beans
  ${disposableCups} disposable cups
  $${money} of money`);
}

function buy() {
  let typeOfCoffee = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"));
  switch (typeOfCoffee) {
    case 1:
      mlOfWater -= 250;
      gramsOfCoffeeBeans -= 16;
      disposableCups -= 1;
      money += 4;      
      console.log("espresso");
      break;
    case 2:
      mlOfWater -= 350;
      mlOfMilk -= 75;
      gramsOfCoffeeBeans -= 20;
      disposableCups -= 1;
      money += 7;
      break;    
    case 3:
      mlOfWater -= 200;
      mlOfMilk -= 100;
      gramsOfCoffeeBeans -= 12;
      disposableCups -= 1;
      money += 6;  
      break;
    default:
      console.log(`Wrong input`);
      break;
  } 
}

function fill() {
  console.log("Write how many ml of water you want to add:");
  mlOfWater += Number(input());
  console.log("Write how many ml of milk you want to add:");
  mlOfMilk += Number(input());
  console.log("Write how many grams of coffee beans you want to add:");
  gramsOfCoffeeBeans += Number(input());
  console.log("Write how many disposable coffee cups you want to add:");  
  disposableCups += Number(input()); 
}

function take() {
  console.log(`I gave you $${money}`);
  money = 0; 
}

printTheStateOfTheCoffeeMachine();

let action = input("Write action (buy, fill, take):");
chooseAction(action);

function chooseAction(action) {
  switch (action) {
    case "buy":
      buy();
      break;
    case "fill":
      fill();
      break;    
    case "take":
      take();
      break;
    default:
      console.log(`Unknown input`);
      break;
  }
  printTheStateOfTheCoffeeMachine();  
}