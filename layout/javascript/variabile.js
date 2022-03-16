let t = undefined; // atunci cand nu am asignat nimic unei variabile
let t2 = null; // cand vreau ca variabila sa nu contina nimic

let numar = 1; //definesc variabila numar si asignez valoarea 1
let numarCuVirgula = 1.5;
let sirDeCaractere="Ana Are mere";
let sirDeCaractere='Ana Are mere !!!';
let boolTrue = true;
let boolFalse = false;

//matematic
numar = 1+2;
numar = numar * 2;
numarCuVirgula = 1 + 2 * 3 - 7;
numar *= 2; // inseamna numar = numa * 2;
numar += 2; // inseamna numa = numar + 2;
numar -= 2; // inseamna numar = numar - 2;
numar /= 2; // inseamna numar = numar / 2;
numar++; // inseamna numar = numar +1
numar--; // inseamna numar = numar -1
numar = numar % 2; // restul impartirii;
numar = numar ** 3; // inseamna umar la  puterea 3
numar = Math.pow(numar, 3); // inseamna numar la puterea 3

//sir de caractere (string)
let sir = "A" + "B"; // un nou sir de caracter "AB"
sir += "Mergee"

let nuFaceAsta = 3+"A"// "3A"
let nuFaceAsta2 = 2+3+"A" // "5A"
let nu faceAsta3 = "b" + 2 + 3 + "A"; // "b23A"
String(23) //"23"

//boolean
//exista true (1) si false (0)

//!true => false
//!false => true

//AND &&
let x = true && false;

// OR  ||
let y = true || false 

if (conditie){
    //in cazul in care conditia este adevarata
} else {
    // in cazul in care conditia este falsa
}

//================================
let ghiciNumarul = 5;
let numarIncercari = 3;
let xx = "5";

let yy = xx + ghiciNumarul;

if(ghiciNumarul === 6) {
    numarIncercari--;
} else {
    alert("Bravo ai ghicit");
}
// egalitate  === (strict)
// diferit !==     (strict)
// mai mare >
// mai mic < 
// mai mic sau egal <=
// mai mare sau egal >=
// negare !

if(ghiciNumarul % 2=== 0){
    alert("Numarul " + ghiciNumarul + " este par"); // Numarul 5 este par 
} else {
    alert(`Numarul ${ghiciNumarul} este impar`);
}

function clatite(parametrii){
    // sparg oua
    //pun faina
    //le bat
    //prajesc in tigaie

    return clatita;
}
function par(nr) {
    if (nr% 2 ===0) {
        return "par";
    } else {
        return "impar";
    }
}

function par(nr){
    let rezultat
    if(nr % 2=== 0){
        rezultat = "par"
    } else {
        rezultat = "impar"
    }
    return rezultat;
}


