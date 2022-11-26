// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const inputText = document.querySelector("#inputText");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");

inputText.innerText = prompt("Please put your text here my friend:");

let text = inputText;

const redFunction = () => {
    text.style.color = "red";
}
const blueFunction = () => {
    text.style.color = "blue";
}
const greenFunction = () => {
    text.style.color = "green";
}

red.addEventListener("click", redFunction);
blue.addEventListener("click", blueFunction);
green.addEventListener("click", greenFunction);