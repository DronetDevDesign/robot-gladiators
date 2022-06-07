var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// multiple values can also be logged like this:
// console.log(playerName, playerAttack, playerHealth);
// var enemyName = "Roboto";
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // Alert players that they ar starting a round.
  // window.alert("Welcome to Robot Gladiators");
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose"
    );

    // If player chooses to fight, then fight.
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // Remove enemy's health by subtracting the amount set in the playerAttack variable.
      enemyHealth = enemyHealth - playerAttack;

      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health points remaining."
      );

      // check enemy's health.
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");
        break;
      } else {
        window.alert(
          enemyName + " still has " + enemyHealth + " health points remaining."
        );
      }
      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health points remaining."
      );

      // check player's health.
      if (playerHealth <= 0) {
        window.alert(playerName + " has dead!");
        break;
      } else {
        window.alert(
          playerName +
            " still has " +
            playerHealth +
            " health points remaining."
        );
      }
      // If player choses to skip.
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // Confirm player wants to skip.
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // If yes (true), leave fight.
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping.
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
      // If no (false), ask question again by running fight() again.
      else {
        fight();
      }

      window.alert(playerName + " has chosen to skip the fight");
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  } else {
    window.alert("You have lost your robot in battle! Game Over!")
  } break;
}

// fight();
