/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

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

// decido grandezza griglia
let level = 100;

// generazione singola cell
function generateMarkup(numb) {
    const cellElement = document.createElement('div')
    cellElement.className = "cell";
    cellElement.innerText = numb;

    return cellElement
}

// click play game diff 1
playDiff1.addEventListener('click', function(){

    gridEl.innerHTML = ``;

    // generazione griglia di gioco quadrata 10x10
    generateField(level, gridEl);
    function generateField(max, domEl) {

        for (let i = 1; i <= level; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff1');
            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            
        }

    }

}
)

// click play game diff 2
playDiff2.addEventListener('click', function(){

    let level = 81;
    gridEl.innerHTML = ``;

    // generazione griglia di gioco quadrata 10x10
    generateField(level, gridEl);
    function generateField(max, domEl) {

        for (let i = 1; i <= level; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff2');

            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            
        }

    }

}
)

// click play game diff 3
playDiff3.addEventListener('click', function(){

    let level = 49;
    gridEl.innerHTML = ``;

    // generazione griglia di gioco quadrata 10x10
    generateField(level, gridEl);

    function generateField(max, domEl) {

        // generateBombs(1, level);

        for (let i = 1; i <= level; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff3');

            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                //console.log(this);

                if (this == bombs) {
                    this.classList.remove("active");
                    this.classList.toggle("bomb");
                }


            }
            )
            
        }

    }

}
)

// // genero 16 numeri casuali, le bombe, i numeri non devono ripetersi

/**
 * Genero i numeri in cui ci saranno le bombe in maniera casuale
 * @param {Number} min minima casella 
 * @param {Number} max casella massima in base al livello
 * @returns 
 */

generateBombs(1, level);

function generateBombs(min, max) {

    const bombs = [];
    
    while (bombs.length !== 16){
        // assegno a bomb un valore casuale
        const bomb = getRandomNumber(min, max);

        // se bomb ha un valore che non c'è in bombs lo aggiungo
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }

        //bombs.length++
    }
    
    return bombs
}

console.log(bombs);

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
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 
*/