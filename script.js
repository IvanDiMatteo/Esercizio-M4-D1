// es. 1

/* function numeri(a, b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true;
    } else {
        return false;
    }  
}

console.log(numeri(50, 20)); */

// es. 2

/* function rimuoviCarattere(stringa, indice) {
    return stringa.replace(stringa[indice], "");
}

console.log(rimuoviCarattere("ciao", 1)); */

// es. 3 

/* function ciao(a, b) {
    if ((a && b >= 40) && (a && b <= 60) || (a && b >= 70) && (a && b <= 100) ) {
        return true;
    } else {
        return false;
    }
}

console.log(ciao(10, 40)); */

// es. 4

/* function nomeCitta(a) {
    if (a.includes("Los") || a.includes("New")) {
        return a;
    } else {
        return false;
    }
}

console.log(nomeCitta("Los Angeles")); */

// es. 5

/* arrNum = [1, 2, 3]

function somma(arrNum) {
    let somma = 0
    for (let i = 0; i < arrNum.length; i++) {
        somma += arrNum[i];
    }

    return somma;
}

console.log(somma(arrNum)); */

// es. 6

/* let array = [2, 5, 6]

function ciao(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(ciao(array)); */

// es. 7

/* function angolo(a) {
    if (a < 90) {
        return "acuto";
    } else if (a > 90 && a < 180) {
        return "ottuso";
    } else if (a === 90) {
        return "retto";
    } else if (a === 180) {
        return "piatto";
    };
}

console.log(angolo(100)); */

// es. 8

/* function acronimo(string) {
    let parola = string.split(" ");
    let firstLetter = "";
    for (let i = 0; i < parola.length; i++) {
        firstLetter += parola[i].charAt(0);
    };
    return firstLetter;
}

console.log(acronimo("Ciao Mi Chiamo Ivan")); */

// EXTRA 1

function caratterePiuFrequente(stringa) {
    let conteggio = {};
    for (let carattere of stringa) {
        if (conteggio[carattere]) {
            conteggio[carattere]++;
        } else {
            conteggio[carattere] = 1;
        }
    }
  
    let caratterePiuComune = "";
    let maxOccorrenze = 0;
    for (let carattere of Object.keys(conteggio)) {
        if (conteggio[carattere] > maxOccorrenze) {
            maxOccorrenze = conteggio[carattere];
            caratterePiuComune = carattere;
        }
    }
    return caratterePiuComune;
}

  console.log(caratterePiuFrequente("cccccddiiaiioii"));