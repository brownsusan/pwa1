/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
	//Generate random number between one and ten
	var num = Math.floor((Math.random()*10)+1);
	console.log(num);
	
	var button = document.querySelector('button');
	button.onclick = function(e){
		
	var guess = document.querySelector('#input').value;
	console.log(guess);
	
	var count = 0;
	
	
		//IF Validate that the number is between 1 and 10 and is there
			//IF count > 3
				//count ++
				//IF guess < num : Too low
				//ELSE IF guess > num : Too High
				//Else IF guess = num : You win
				//return count;
			//Else You Lose
					
		if(num >= 1 && num <= 10){
		console.log("verify funct");
			//IF count > 3
			if(count < 3){
				count++;
				return count;
				if(guess > num){
					console.log("Too high");
				}
				else if(guess < num){
					console.log("Too low");
				}
				else{
					console.log("Win");
				};
				//IF guess < num : Too low
				//ELSE IF guess > num : Too High
				//Else IF guess = num : You win
				//return count;
			}
			else{
				//Else You Lose
			};
		}
		else{
			//ELSE Display message - enter a number between 1 and 10
			
		};
		
	};
	
})();