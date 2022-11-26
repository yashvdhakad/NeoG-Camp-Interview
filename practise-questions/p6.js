// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

const text = document.querySelector("#text");
const loadingBtn = document.querySelector("#loadingBtn");

const clickHandler = () => {
    text.style.display = "none";
}

loadingBtn.addEventListener("click", clickHandler);