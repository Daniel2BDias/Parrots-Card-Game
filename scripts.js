const board = document.querySelector('.jogo');

const parrots = [

];

const timer = document.getElementById("timer");

const jogadas = document.getElementById("jogadas");

let qtdCartas = prompt("quantas cartas? 4-14, somente pares");
while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
    prompt("quantas cartas? 4-14, somente pares");
    qtdCartas = prompt("quantas cartas? 4-14, somente pares");
}


for(let i = 0; i < qtdCartas; i++){
board.innerHTML += `<div class="carta" onclick="clicked(this)">
<div class="face">
  <img src="Gifs/front.png">
</div>
<div class="back-face face">
  <img src="Gifs/${}.gif">
</div>
</div>`;
}

function clicked(clicada){

    const first = `${clicada}.firstChild`;
    const last = `${clicada}.lastChild`;
    const front = document.querySelector(first);
    const back = document.querySelector(last);
    front.classList.add('front-face');
    back.classList.remove('back-face');
}