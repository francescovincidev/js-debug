/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// Questo esercizio dovrebbe attribuire a "message" due messaggi diversi in base al valore di myAge. "message" dovrebbe essere una variabile e non una costante. Se vogliamo anche il valore fuori dalla funzione dobbiamo aggiungere return message


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
// Questa funzione ci stampa nella console la lughezza dell'array "colors". "lenght" è sbagliato dovrebbe essere length


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// qui la funzione dovrebbe sommare 12 al numero inserito dall'utente. Bisogna aggiungere ParseInt al prompt altrimenti il numero inserito viene considerato stringa e quindi otteremo una concatenazione e non una somma


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// Qui la funzione vuole dare l'accesso solo se l'email è presente nrll'array addresses, ma cio non avverrà mai perchè l'accesso viene garantito solo quando "grantAccess" avrà il valore booleano true, cosa che non accade mai. Infatti se inseriamo un'email contenuta nell'array verrà attribuito a grantAccess un valore di stringa con contenuto true
