
let playButton = document.getElementById('play');
let btnReset = document.getElementById("reset");


function play() {
    
    document.getElementById("livello").disabled = true;
    console.log("Inizio gioco");
    const NUM_BOMB = 16;
    const bombsPosition = [];
    let score = 0;
    let testo = document.getElementById("testo");
    let text = document.getElementById('text');
    testo.innerHTML = '';
    text.innerHTML ='';
    let numCell;
    const fieldGame = document.getElementById('field-game');
    fieldGame.innerHTML = '';
    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;

    switch (level) {
        case '1':
        default:
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }

    const MAX_ATTEMPT = numCell - NUM_BOMB;


    while (bombsPosition.length < NUM_BOMB) {
        const bomb = getRandomNumber(1, numCell);
        if (!bombsPosition.includes(bomb)) {
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition.sort());

    function scegli() {
        const span = this.querySelector('span');
        console.log(span)
        const num = parseInt(span.textContent);
        this.removeEventListener('click', scegli);
       
        if (!bombsPosition.includes(num)) {
            this.classList.add('selezionato');
            this.innerHTML = `<span>${num}</span>`;
            score++;
            console.log(score);
            if (score === MAX_ATTEMPT) {
                endGame();
            }
        } else {
            this.style.backgroundColor = 'red';
            endGame();
        }
       
    }


    function creaCell(num) {
        const cellPerSide = Math.sqrt(numCell);
        const cell = document.createElement('div');
        cell.className = 'quadrato';
        cell.style.width = `calc(100% / ${cellPerSide})`;
        cell.style.height = `calc(100% / ${cellPerSide})`;
        cell.innerHTML = `<span>${num}</span>`
        cell.addEventListener("click", scegli);
        return cell;
    }

    function creaGriglia() {
       
        const griglia = document.createElement('div');
        griglia.className = 'griglia';
        for (let i = 1; i <= numCell; i++) {
            const cell = creaCell(i);
            griglia.appendChild(cell);
        }
        fieldGame.appendChild(griglia);
    }
    creaGriglia();


    function endGame() {
        console.log('endGame');
        const quadrati = document.querySelectorAll('.quadrato');
        console.log(quadrati);
        for (let i = 0; i < quadrati.length; i++) {
            quadrati[i].removeEventListener('click', scegli);
            let num = i + 1;
            if (bombsPosition.includes(num)) {
                quadrati[i].classList.add('red');
            }
        }
        if (score === MAX_ATTEMPT) {
            text.innerHTML = 'Hai vinto con il punteggio massimo ' +score;
            console.log('hai vinto');
        } else {
            text.innerHTML = 'Hai perso con questo questo punteggio '+score;

            console.log('Hai perso');
        }
        
    }
  
}


playButton.addEventListener('click', play);


btnReset.addEventListener("click", function () {
    window.location.reload();
});