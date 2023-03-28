/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// Questa ciclo dovrebbe stampare i numeri da 0 a 4 o 5 (4 se <, 5 se <=). Ciò non si verifica perchè è inserito il >. Quindi il ciclo partirebbe solo quando i > 5 e dato l'incremento non si fermerebbe mai


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// Qui l'if non funziona perchè dovremmo dare == o === tra il 2 e lo 0. = è un segno di attribuzione mentre == e === di comparazione. Inserendo uno dei due la funzione ci darà il num sommato a 5 se num è pari altrimenti soltanto num se dipsari


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// Questa funzione vuole stampare i numeri da 0 a 4. Ciò non accade perche all'interno di for la dichiarazione, la condizione e l'incrementatore devono essere separati da ; e non da ,


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

// Questa funzione vuole ritornare un nuovo array che contiene i numeri dispari del primo array. Gli errori sono:
// 1. Il segno = e non == o === all'interno dell'if.
// 2. Nell'if viene comparato numbers (quindi l'array). Dovrebbe essere comparato ogni singolo elemento quindi nummbers[i]
// 3. Sempre nell'if c'è il ; dopo la condizione, queto non dovrebbe essere presente
// 4. Il ; non dovrebbe essere presente nemmeno alla fine dell'incrementatore del for
// 5. Non dovrebbe pushare i ma numbers[i]. Se inseriamo solo i ci pusherà il valore di i e non il valore all'interno dell'array
// 6. return dovrebbe essere alla fine della funzione e non all'interno del ciclo for, altrimenti si fermerebbe dopo un ciclo
// 7. Se diamo -1 a numbers.length nel ciclo for questo si fermerà un numero prima
// 8.(?) Se vogliamo stampare il risultato in console non basta return. Dobbiamo inserire "displayEvenNumbers()" allinterno di un console.log()