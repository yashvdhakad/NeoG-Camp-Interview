// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumBtn = document.querySelector("#sumBtn");
const minusBtn = document.querySelector("#minusBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divBtn = document.querySelector("#divBtn");
const outputDiv = document.querySelector("#outputDiv");

const number1 = Number(num1.value);
const number2 = Number(num2.value);

const sumFunction = () => {
    outputDiv.innerText = `Hey, Sum is: ${number1 + number2}`;
}
const minusFunction = () => {
    outputDiv.innerText = `Hey, Minus is: ${number1 - number2}`;
}
const multiplyFunction = () => {
    outputDiv.innerText = `Hey, Muliply is: ${number1 * number2}`;
}
const divFunction = () => {
    outputDiv.innerText = `Hey, Division is: ${number1 / number2}`;
}

sumBtn.addEventListener("click", sumFunction);
minusBtn.addEventListener("click", minusFunction);
multiplyBtn.addEventListener("click", multiplyFunction);
divBtn.addEventListener("click", divFunction);