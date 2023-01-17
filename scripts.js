const board = document.querySelector('.jogo');

const parrots = [
    'parrot1',
    'parrot2',
    'parrot3',
    'parrot4',
    'parrot5',
    'parrot6',
    'parrot7'
];

const jogadas = document.getElementById("jogadas");

let qtdCartas = prompt("quantas cartas? 4-14, somente pares");

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
    prompt("quantas cartas? 4-14, somente pares");
    qtdCartas = prompt("quantas cartas? 4-14, somente pares");
}

const timer = document.getElementById("timer");
let timerCounter = 0;
let interval = setInterval(contador, 1000);

function contador(){
  timerCounter++;
  timer.innerHTML = timerCounter;
}


 const divided = qtdCartas/2;

 const slicedParrots = parrots.slice(0, divided);

 const slicedParrotsClone = [...slicedParrots];

 const parrotsFusion = slicedParrots.concat(slicedParrotsClone);

 const shuffled = parrotsFusion.sort(() => Math.random() - 0.5);

for(let i = 0; i < qtdCartas; i++){

   board.innerHTML += `<div data-test="card" data-parrot="${shuffled[i]}" class="carta" onClick="viraCarta(this)">
    <div class="front-face face">
      <img data-test="face-down-image" src="Gifs/front.png">
    </div>
    <div class="back-face face">
      <img data-test="face-up-image" src="Gifs/${shuffled[i]}.gif">
    </div>
    </div>`;
    }

    let primeira = "";
    let segunda = "";

    function verificaCarta(){

      const verPrimeira = primeira.getAttribute('data-parrot');
      const verSegunda = segunda.getAttribute('data-parrot');

      console.log(verPrimeira, verSegunda)
      if(verPrimeira === verSegunda){

        setTimeout(() => {

          primeira.classList.add('acertou');
         segunda.classList.add('acertou');
        
         primeira = "";
        segunda = "";

        }, 500);

      
      } else {

        setTimeout(() => {
        
        primeira.classList.remove('vira-carta');
        segunda.classList.remove('vira-carta');
        
        primeira = "";
        segunda = "";
        
      }, 1000);
      
      }

    }
    function viraCarta(clicada){

      if(primeira === ""){
      clicada.classList.add('vira-carta');
      primeira = clicada;
      } else if (segunda === ""){
        clicada.classList.add('vira-carta');
        segunda = clicada;
      }

      const jogadasHtml = jogadas.innerHTML;

      const numerico = +jogadasHtml

      jogadas.innerHTML = numerico+1;

      verificaCarta();
      fimDoJogo();
    }

    function fimDoJogo(){
    if (document.querySelectorAll('.acertou').length === qtdCartas){
      
      alert(`Você ganhou em ${jogadas.innerHTML} jogadas! A duração do jogo foi de ${timer.innerHTML} segundos!`);
    
}
    }
