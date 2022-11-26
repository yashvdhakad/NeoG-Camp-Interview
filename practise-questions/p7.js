// Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

const inputText = document.querySelector("#inputText");
const checkBtn = document.querySelector("#checkBtn");
const outputDiv = document.querySelector("#outputDiv");

const clickHandler = () => {
    outputDiv.innerText = inputText.value;
    outputDiv.style.textTransform = "capatalize";
}

checkBtn.addEventListener("click", clickHandler);