//import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const second = document.querySelector("#segundo-numero");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + firstNumber +"</p>"  ;
  div.innerHTML += "<p>" + secondNumber +"</p>";
});
