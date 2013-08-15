// self-executing function
(function () {

    playerOne = {
        'name': "Spiderman",
        'damage': 20,
        'health': 100
    }
    playerTwo = {
        'name': "Batman",
        'damage': 20,
        'health': 100
    }

    var players = [playerOne, playerTwo];

    var fighting = true;
    var round = 0;


    var button = document.querySelector('#fight_btn');
    //Created a variable to represent the button from the html. running a function when the button is clicked.
    button.onclick = function (e) {
    	//Boolean value of fighting determines if the game is being played so that when an game ending condition has been met the button will not be functional any longer.
        if (fighting) {
        //Updating he inner html to display the player's health while the game is still running.
            document.querySelector('#kabal p').innerHTML = players[0].health;
			document.querySelector('#kratos p').innerHTML = players[1].health;

            //The next two variables determine what the minimum possible damage is for each player
            var minDamage1 = playerOne.damage * .5;
            var minDamage2 = playerTwo.damage * .5;

            //The next two variables are picking a random number to reduce from the player's health points
            var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);

            //Subtracting the points determined by the previous random numbers from the player's health.
            playerOne.health -= f2;
            playerTwo.health -= f1;

            //Checking for a winner
            var result = winnerCheck();
            console.log(result);
            //If the result is no winner then start another round and update the alert with the new values.
            //If the result is winner (else) then the alert screen will display the winner and tell the function to stop running. 
            if (result === "No Winner") {
                round++;
                console.log(playerOne.name + ":" + playerOne.health + "  *ROUND " + round + " OVER" + "*  " + playerTwo.name + ":" + playerTwo.health);
            }else{
            //This conditional sets the game to false if the result is not "No Winner"
	            fighting = false;
	            
	            //Updating the inner html to display the player's health when the game ends.
	            document.querySelector('#kabal p').innerHTML = players[0].health;
	            document.querySelector('#kratos p').innerHTML = players[1].health;
            }
            //Updating the html to display the round and the result.
            document.querySelector('#round').innerHTML = "Round " + round + ": " + result;
        }
    };

    // Function to check the health scores to determine if there is a winner.

    function winnerCheck() {
        var result = "No Winner";
        if (playerOne.health < 1 && playerTwo.health < 1) {
            result = "You Both Die";
        } else if (playerOne.health < 1) {
            result = playerTwo.name + " Wins";
        } else if (playerTwo.health < 1) {
            result = playerOne.name + " Wins";
        };
        return result;
    };



    //Here the fight function is run until a win/lose scenario has been met.
    /* fight(); */

})();