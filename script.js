"use strict";

const displayMessage=function(cls,message){
    document.querySelector(cls).textContent=message;
}

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);
let score = 20;
let highscore=0;
document.querySelector(".checkbutton").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
   
    displayMessage('.message',"🚫 NO INPUT");
  } else if (guess === secretNumber) {
    displayMessage('.message',"🏆 YOU WON");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('body').style.backgroundColor='#64E986';
    if(score>highscore){
        highscore=score;
        displayMessage('.highscore',highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage('.message',guess < secretNumber ? "📉Too low" : "📈 Too High"); 
      score--;
    displayMessage('.score',score);
    } else {
        displayMessage('.message','YOU LOST THE GAME💥')
        displayMessage('.score',0);
        document.querySelector('body').style.backgroundColor='#D2042D'
    }
  }
});
document.querySelector('.againbtn').addEventListener("click",function(){
    displayMessage('.message','Start Guessing...');
    score=20;
    displayMessage('.score',score);
    secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='#0fa4af';
    document.querySelector('.number').textContent='?';
})