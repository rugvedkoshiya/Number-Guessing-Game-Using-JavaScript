'use strict';

// define some variable of html selector
var guessField = document.getElementById("guessField")
var guessCheckBtn = document.getElementById("guessCheckBtn")
var guessAbout = document.getElementById("guessAbout")
var winningStatusCloseBtn = document.getElementById("winningStatusCloseBtn")

// Guess Number on Page Load
let count = 0;
let minNum = 1;
let maxNum = 100;
let winningNumer = Math.floor(Math.random() * (maxNum-minNum) + minNum)


// add event listner to HTML
guessCheckBtn.addEventListener("click", guessFunc);

// Define some function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function guessFunc() {
    var uservalue = parseInt(guessField.value)
    console.log(uservalue);

    if(uservalue == winningNumer) {
        count++;
        guessAbout.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show");
        guessAbout.classList.remove("alert-warning", "alert-danger");
        guessAbout.innerHTML = `You Win in just ${count} step`;
        await sleep(2000);
        window.location.reload();
    }

    else if (uservalue < winningNumer) {
        count++;
        guessAbout.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
        guessAbout.classList.remove("alert-success", "alert-danger");
        guessAbout.innerHTML = `You guess smaller then Winnig number`;
    }

    else if (uservalue > winningNumer) {
        count++;
        guessAbout.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
        guessAbout.classList.remove("alert-success", "alert-danger");
        guessAbout.innerHTML = "You Guess larger then winning number";
    }

    else {
        guessAbout.classList.add("alert", "alert-danger", "alert-dismissible", "fade", "show");
        guessAbout.classList.remove("alert-success", "alert-success");
        guessAbout.innerHTML = "Sharam karo ke nai number nakhvano hoy";
    }
    
}