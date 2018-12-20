/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var num1;
var num2;
var risult;
var totalone = 0;
var okDati;

function isVuota(testo) {
    if (testo.length === 0)
        return true;
    else
        return false;
}

function checkDati() {
    //verifico num1 e num2
    // e ritorno true se presenti solo numeri
    // altrimenti ritorno false
    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }
}

function faseInput() {
    num1 = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;
    okDati = checkDati();
    //verifico se ok dati e poi valuto se trasformare in numeri
    if (okDati === true) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else {
        alert("ATTENZIONE!! Dati non corretti");
    }
}

function faseOutput() {
    document.getElementById("div_risult").innerHTML = risult;
    document.getElementById("sp_totalone").innerHTML = totalone;
}


function somma() {
    // richiamo il testo faseInput
    faseInput();
    if (okDati) {
        risult = num1 + num2;
        totalone = totalone + risult;
        //richiamo il metodo faseOutput
        faseOutput();
    }

}

function sottr() {
    // richiamo il testo faseInput
    faseInput();
    if (okDati) {
        risult = num1 - num2;
        totalone = totalone + risult;
        //richiamo il metodo faseOutput
        faseOutput();
    }
}

function molt() {
    // richiamo il testo faseInput
    faseInput();
    if (okDati) {
        risult = num1 * num2;
        totalone = totalone + risult;
        //richiamo il metodo faseOutput
        faseOutput();
    }
}

function divis() {
    // richiamo il testo faseInput
    faseInput();
    if (okDati) {
        risult = num1 / num2;
        totalone = totalone + risult;
        //richiamo il metodo faseOutput
        faseOutput();
    }
}










