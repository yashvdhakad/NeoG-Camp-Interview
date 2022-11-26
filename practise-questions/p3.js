// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const text = document.querySelector("#text");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");

const h1Function = () => {
    text.style.fontSize = "32px";
}
const h2Function = () => {
    text.style.fontSize = "26px";
}
const h3Function = () => {
    text.style.fontSize = "22px";
}

h1.addEventListener("click", h1Function);
h2.addEventListener("click", h2Function);
h3.addEventListener("click", h3Function);