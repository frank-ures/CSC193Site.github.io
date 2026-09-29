

function alertFunction() {
    alert("Hello, world!");
}

function biggerButton() {
    document.getElementById("user-input").style.fontSize = "24pt";
}
    
function fancyButton() {
    document.getElementById("user-input").style.fontWeight = "bold";
    document.getElementById("user-input").style.color = "blue";
    document.getElementById("user-input").style.textDecoration = "underline";
}

function boringButton() {
    document.getElementById("user-input").style.fontWeight = "normal";
    document.getElementById("user-input").style.color = "black";
    document.getElementById("user-input").style.textDecoration = "none";
}

function mooButton() {

    const userInput = document.getElementById('user-input');

    let upperText = userInput.value.toUpperCase();

    let parts = upperText.split(".");
    userInput.value = parts.join("-Moo");
}


