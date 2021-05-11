'use strict';
let scores, roundScore, activePlayer, dice ,playing;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    roundScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

function init(){
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    playing=true;
    
    diceEl.classList.add('hidden');
    
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

    document.getElementById("name--0").textContent = sessionStorage.getItem("player1");
    document.getElementById("name--1").textContent = sessionStorage.getItem("player2");  

}
init();


btnRoll.addEventListener('click', function(){
    if (playing) {
        dice =Math.floor(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src='assets/dice-'+dice+'.png';

        if(dice!==1){
            roundScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent = roundScore;
        }
        else{
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
      scores[activePlayer] += roundScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
  
      if (scores[activePlayer] >= 100) {

        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        switchPlayer();
      }
    }
  });

btnNew.addEventListener('click', init);