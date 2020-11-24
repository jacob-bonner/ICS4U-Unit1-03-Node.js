// Created By: Jacob Bonner
// Created On: November 2020
// This program tells the user the energy that 
//   an object could release given its mass.

// Importing readline for getting user input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Constants
const speedOfLight = 2.998 * (10**8);

// Input
rl.question("Enter the mass of the object (in kilograms): ",
            function saveInput(mass) {

  // Process
  var energyReleased = mass * speedOfLight ** 2;
  var numberOfBombs = energyReleased / (4 * 10 ** 12);

  // Output
  console.log("");
  console.log("This object can potentially release", energyReleased, 
              "joules of energy.");
  console.log("");
  console.log("This is the equivalent energy of", 
              numberOfBombs, "nuclear bombs.");
  rl.close();
});
