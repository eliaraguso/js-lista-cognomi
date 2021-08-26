// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// Creo un array con i vari cognomi
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Chiedo all'utente di inserire il suo cognome
var cognome = prompt("Inserisci il tuo cognome");

// Faccio si che in ogni caso il cognome inserito abbia la prima lettera maiuscola
var cognomeCapitalized = cognome.charAt(0).toUpperCase() + cognome.slice(1)

// Inserisco il cognome nel mio Array
listaCognomi.push(cognomeCapitalized);

// Ordino la lista di cognomi alfabeticamente e la stampo
listaCognomi.sort();
alert(listaCognomi);

// Scrivo in che posizione "umana" è finito il cognome inserito all'interno dell'Array
alert ("Il tuo cognome è in posizione numero " + (listaCognomi.indexOf(cognomeCapitalized) + 1));

