/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 
*/


// prendo il click dell'utente
const playDiff1 = document.querySelector(`.diff_1`);
const playDiff2 = document.querySelector(`.diff_2`);
const playDiff3 = document.querySelector(`.diff_3`);

// prendo elemento grid
const gridEl = document.querySelector(`.grid`);

// prendo elemento results
const resultsEl = document.querySelector(`.results`)

// creo elemento h2
const resultsH2 = document.createElement('h2');

// decido grandezza griglia e la difficoltà
const classLevel1 = `cellDiff1`;
const CellsDiff1 = 100;

const classLevel2 = `cellDiff2`;
const CellsDiff2 = 81;

const classLevel3 = `cellDiff3`;
const CellsDiff3 = 49;


// click play game diff 1
playDiff1.addEventListener('click', function(){

    gridEl.innerHTML = ``;

    // generazione griglia di gioco quadrata
    generateField(gridEl, classLevel1, CellsDiff1);

}
)

// click play game diff 2
playDiff2.addEventListener('click', function(){

    gridEl.innerHTML = ``;

    // generazione griglia di gioco quadrata
    generateField(gridEl, classLevel2, CellsDiff2);

}
)

// click play game diff 3
playDiff3.addEventListener('click', function(){
    
    gridEl.innerHTML = ``;

    // generazione griglia di gioco
    generateField(gridEl, classLevel3, CellsDiff3);

}
)

// generazione singola cell
function generateMarkup(numb) {
    const cellElement = document.createElement('div')
    cellElement.className = "cell";
    cellElement.innerText = numb;

    return cellElement
}

// Diff function
function generateField(domEl, levelDiff, cellsNumber) {

    let level = cellsNumber;

    let pcBombs = generateBombs(1, level);
    console.log(pcBombs);

    for (let i = 1; i <= level; i++) {

        const cellElement = generateMarkup(i);

        // inserisci il markup nel container
        cellElement.classList.add(levelDiff);

        domEl.insertAdjacentElement(`beforeend`, cellElement);

        // al click dell'utente la casella diventa blu
        cellElement.addEventListener('click', function(){
            
            const victoryCells = (cellsNumber - 16);
            console.log(victoryCells);
            
            const activeCells = document.querySelectorAll(`.active`);
            console.log(activeCells);

            const yourScore = activeCells.length;
            
            this.classList.toggle("active");

            for (let index = 0; index < pcBombs.length; index++) {
                const element = pcBombs[index];

                if (i == element) {
                    this.classList.remove("active");
                    this.classList.toggle("bomb");
                    
                    resultsH2.classList.add("loser")
                    resultsH2.innerText = `Hai perso! Il tuo punteggio è di ${yourScore} caselle calpestate su ${victoryCells} calpestabili`;
                    resultsEl.insertAdjacentElement(`beforeend`, resultsH2);
                }
            }
    
            if (yourScore == victoryCells) {
                resultsH2.classList.add("winner")
                resultsH2.innerText = `Hai vinto! Il tuo punteggio è di ${victoryCells} caselle calpestate su ${victoryCells} calpestabili`;
                resultsEl.insertAdjacentElement(`beforeend`, resultsH2);
            }

        }
        )

    }

}


/**
 * Genero i numeri in cui ci saranno le bombe in maniera casuale
 * @param {Number} min minima casella 
 * @param {Number} max casella massima in base al livello
 * @returns array with random number
 */
function generateBombs(min, max) {

    let bombs = [];
    
    while (bombs.length !== 16){
        // assegno a bomb un valore casuale
        const bomb = getRandomNumber(min, max);

        // se bomb ha un valore che non c'è in bombs lo aggiungo
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }

    }

    return bombs
}

/**
 * Genero un numero random
 * @param {Number} min minimo in questione 1
 * @param {Number} max massimo in questione è il numero delle caselle del livello
 * @returns numero intero casuale da un min ad un max
 */
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}











/*
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 
*/