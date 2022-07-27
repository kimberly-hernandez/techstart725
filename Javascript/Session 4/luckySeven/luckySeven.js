//rolling dice
let diceRoll;
let diceRollTotal =0;
let max;
let maxdice;

function rollDice() {
    let diceOne= Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;
    diceRoll = diceOne + diceTwo;
    console.log("rolled:" + diceRoll)
  }
  

//DOM
var input = document.getElementById("bet")
var button = document.getElementById("button")
var betTotal = document.getElementById("betTotal");

//add event listener to button
button.addEventListener("click", function(event){
    event.preventDefault();

//turn user input into a number 
  let bet = document.getElementById("betTotal").textContent = input.value;
    bet = parseInt(input.value, 10);

    //create new variable to track running total
    let newTotal =bet;

//validation, user is unable to start game unless they bet over $0.
    if (input.value <=0 ){
        document.getElementById("betTotal").textContent = "you must enter a bet greater than $0"
    }

    //is user bets more than $0, game will begin.
    else{
        
       
      do{rollDice();
        diceRollTotal++
        
        if (diceRoll == 7){
            newTotal +=4;
            console.log("Dice Roll #: " + diceRollTotal)
            console.log("balance:" + newTotal)
          


          }
          else {
            newTotal -=1;
            console.log("Dice Roll #: " + diceRollTotal)
            console.log("balance:" + newTotal)
            //document.getElementById("betTotal").textContent = bet;
            //document.getElementById("newTotal").textContent = newTotal;
          }

          max = newTotal;
          if (max > newTotal){
            max= newTotal;
            maxdice =diceRollTotal;
            
          }
        }
        while(newTotal >0)
       

        
    }
        
    document.getElementById("betTotal").textContent = bet;
    document.getElementById("newTotal").textContent = newTotal;
    document.getElementById("rollTotal").textContent = diceRollTotal;
    
})

