//dichiarazioni variabili e selezione elementi
let select = document.querySelector('.select');
let selectValue;
let value = 5;
let playerOne = document.querySelector(".btnP1");
let playerTwo = document.querySelector(".btnP2");
let resetButton = document.querySelector('.btnReset');
let contP1 = 0;
let contP2 = 0;
let scoreP1 = document.querySelector('.scoreP1');
let scoreP2 = document.querySelector('.scoreP2');
let winner = document.createElement("h1");
let contentDiv = document.querySelector('.content');

//evento per la scelta del winning score
select.addEventListener('change', function(e){
  selectValue = e.target;
  value = selectValue.value;
  reset();
})

//evento per aggiungere a P1 un punto
playerOne.addEventListener('click', function(){
  contP1++;
  scoreP1.innerText = contP1;
  if(contP1 == value){
    scoreP1.classList.toggle('greenSpan');
    scoreP2.classList.toggle('redSpan')
    playerOne.disabled = true;
    playerTwo.disabled = true;
    win = document.querySelector('.win');
    win.classList.toggle('hide');
    winner.innerText = "Player 1 Wins!";
    contentDiv.append(winner);
  }
})


//evento per aggiungere a P2 un punto
playerTwo.addEventListener('click', function(e){  //la 'e' è necessaria?
  contP2++;
  scoreP2.innerText = contP2;
  if(contP2 == value){
    scoreP2.classList.toggle('greenSpan');
    scoreP1.classList.toggle('redSpan');
    playerOne.disabled = true;
    playerTwo.disabled= true;
    win = document.querySelector('.win');
    win.classList.toggle('hide');
    winner.innerText = "Player 2 Wins!";
    contentDiv.append(winner);
  }
})

//reset dei controlli
resetButton.addEventListener('click', reset)

function reset(){
  contP1=0;
  contP2=0;
  document.querySelector('.scoreP1').innerText = contP1;
  document.querySelector('.scoreP2').innerText = contP2;
  scoreP2.classList.remove('greenSpan', 'redSpan');
  scoreP1.classList.remove('redSpan', 'greenSpan');
  playerOne.disabled = false;
  playerTwo.disabled = false;
  win.classList.toggle('hide');
  win = 0;
  winner.remove();
}


