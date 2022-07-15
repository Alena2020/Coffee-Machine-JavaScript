const input = require('sync-input');

let mlOfWater = 400;
let mlOfMilk = 540;
let gramsOfCoffeeBeans = 120;
let disposableCups = 9;
let money = 550;
let cupsCoffee = 0;

let exitStatus = false;

function  printTheStateOfTheCoffeeMachine() {
  console.log(`The coffee machine has:
  ${mlOfWater} ml of water
  ${mlOfMilk} ml of milk
  ${gramsOfCoffeeBeans} g of coffee beans
  ${disposableCups} disposable cups
  $${money} of money`);
}

function buyCoffee() {
  let typeOfCoffee = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:"));
  
  switch (typeOfCoffee) {

    case 1:
      cupsCoffee = Math.min(parseInt(mlOfWater / 250), parseInt(gramsOfCoffeeBeans / 16));
      if (cupsCoffee >= 1) {
        console.log(`I have enough resources, making you a coffee!`);
        mlOfWater -= 250;
        gramsOfCoffeeBeans -= 16;
        disposableCups -= 1;
        money += 4;         
      } else {
          if (disposableCups < 1) {
            console.log("Sorry, not enough cups!");
          }

          if (mlOfWater < 250) {
            console.log("Sorry, not enough water!");
          }

          if (gramsOfCoffeeBeans < 16) {
            console.log("Sorry, not enough coffee beans!");
          }
      }   
      break;

    case 2:
      cupsCoffee = Math.min(parseInt(mlOfWater / 350), Math.min(parseInt(mlOfMilk / 75), parseInt(gramsOfCoffeeBeans / 20)));
      if (cupsCoffee >= 1) {
        console.log(`I have enough resources, making you a coffee!`);
        mlOfWater -= 350;
        mlOfMilk -= 75;
        gramsOfCoffeeBeans -= 20;
        disposableCups -= 1;
        money += 7;        
      } else {
          if (disposableCups < 1) {
            console.log("Sorry, not enough cups!");
          }
          if (mlOfWater < 350) {
            console.log("Sorry, not enough water!");
          }

          if (mlOfMilk < 75) {
            console.log("Sorry, not enough milk!");
          }

          if (gramsOfCoffeeBeans < 20) {
            console.log("Sorry, not enough coffee beans!");
          }
      } 
      break;

    case 3:
      cupsCoffee = Math.min(parseInt(mlOfWater / 200), Math.min(parseInt(mlOfMilk / 100), parseInt(gramsOfCoffeeBeans / 12)));
      if (cupsCoffee >= 1) {
        console.log(`I have enough resources, making you a coffee!`);
        mlOfWater -= 200;
        mlOfMilk -= 100;
        gramsOfCoffeeBeans -= 12;
        disposableCups -= 1;
        money += 6;        
      } else {
          if (disposableCups < 1) {
            console.log("Sorry, not enough cups!");
          }

          if (mlOfWater < 200) {
            console.log("Sorry, not enough water!");
          }

          if (mlOfMilk < 100) {
            console.log("Sorry, not enough milk!");
          }

          if (gramsOfCoffeeBeans < 12) {
            console.log("Sorry, not enough coffee beans!");
          }
      }        
      break;

    case "back":
      chooseAction();
      break;

    default:
      console.log(`Wrong input`);
      break;
  } 
}

function fillTheCoffeeMachine() {
  console.log("Write how many ml of water you want to add:");
  mlOfWater += Number(input());
  console.log("Write how many ml of milk you want to add:");
  mlOfMilk += Number(input());
  console.log("Write how many grams of coffee beans you want to add:");
  gramsOfCoffeeBeans += Number(input());
  console.log("Write how many disposable coffee cups you want to add:");  
  disposableCups += Number(input()); 
}

function takeMoneyFromCoffeeMachine() {
  console.log(`I gave you $${money}`);
  money = 0; 
}

function chooseAction() {
  console.log(``);
  let action = input("Write action (buy, fill, take, remaining, exit):");
  console.log(``);

  switch (action) {

    case "buy":
      buyCoffee();
      break;

    case "fill":
      fillTheCoffeeMachine();
      break;  

    case "take":
      takeMoneyFromCoffeeMachine();
      break;

    case "remaining":
      printTheStateOfTheCoffeeMachine();
      break;

    case "exit":
      console.log("Have a nice day!");
      exitStatus = true;      
      break;

    default:
      console.log(`Unknown input`);
      break;
  } 
}

while (!exitStatus) {
  chooseAction();
}