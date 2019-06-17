var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var random1 = document.querySelector(".random-1");

var random2 = document.querySelector(".random-2");



function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";

    
}

function getRandomColor() {
    var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    return randomColor;
}

function setRandomColor1() {
    color1.value = getRandomColor();
    changeColor();
    random1.style.background = color1.value;
}

function setRandomColor2() {
    color2.value = getRandomColor();
    changeColor();
    random2.style.background= color2.value;
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

random1.addEventListener("click", setRandomColor1);

random2.addEventListener("click", setRandomColor2);

changeColor();

