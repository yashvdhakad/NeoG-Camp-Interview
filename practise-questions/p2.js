// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const text = document.querySelector("#text");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");

let fontSize = 36;
text.style.fontSize = `${fontSize}px`;

const plusFunction = () => {
    text.style.fontSize = `${fontSize += 2}px`;
}

const minusFunction = () => {
    text.style.fontSize = `${fontSize -= 2}px`;
}

plusBtn.addEventListener("click", plusFunction);
minusBtn.addEventListener("click", minusFunction);