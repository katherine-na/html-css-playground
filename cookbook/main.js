// Selecting elements

const title = document.getElementById("titulo");
const navButton = document.getElementsByClassName("botones");
const mainDiv = document.getElementsByTagName("div");
const footer = document.querySelector("#titulo");
const paragraphs = document.querySelectorAll("p");

// Creating Elements

const paragraph = document.createElement("p");

// Adding Atributtes to Elements

title.setAttribute("title", "lorem ipsum");
title.removeAttribute("title");

console.log(title.getAttributeNames());

// Adding and Removing Class Names

footer.classList.add("my-footer");
footer.classList.remove("my-footer");

// Modify text of an element

const subtitle = document.querySelector("#subtitle");
subtitle.innerHTML = `<a href='google.com'>Postre ganador de la semana</a>`;
console.log(subtitle.textContent);

const image = document.querySelector("img");
image.remove();

// apend, prepend, b, af

// Adding Style

title.style.color = "blue";

const button = document.querySelector(".boton");
button.style.transition = "0.5s all";
button.style.backgroundColor = "red";

// Event types (onclick, onmouseover, onmouseenter, onmouseleave, submit, keydown, keyup, onload)

const form = document.querySelector("form");
const inputName = document.querySelector("#name");

const showAlert = () => {
  confirm("r u sure?");
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("sending data");
};

const handleChange = (event) => {
  console.log(this);
  console.log("hola", event.target.value);
};

title.addEventListener("click", showAlert);
form.addEventListener("submit", handleSubmit);
inputName.addEventListener("keydown", handleChange);
