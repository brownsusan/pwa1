// self-executing function
(function(){
/*
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
*/
    //	NAME	DAMAGE	HEALTH
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];

    //initiate round
    var round=0;

    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //The next two variables determine what the minimum possible damage is for each player
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            
            //The next two variables are picking a random number to reduce from the player's health points
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //Subtracting the points determined by the previous random numbers from the player's health.
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            //Checking for a winner
            var result = winnerCheck();
            console.log(result);
            //If the result is no winner then start another round and update the alert with the new values.
            //If the result is winner (else) then the alert screen will display the winner and tell the function to stop running. 
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
                alert(result);
                break;
            };

          };
    };


    // Function to check the health scores to determine if there is a winner.
    function winnerCheck(){
    	//Setting result to no winner by default. 
    	//If player one's health and player two's health are less than one then both players are dead.
    	//Setting the result variable to match the scenario
    	// If player one's health is less than 1 then player two is the winner and the result is updated appropriately.
    	// If player two's health is less than 1 then player two is the winner and the result is updated appropriately.
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
         result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
        //Returning the result so that the fight function knows if there has been a winner or not.
       return result;
    };

    //Here the fight function is run until a win/lose scenario has been met.
    fight();

})();