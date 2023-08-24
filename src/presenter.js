//import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const second = document.querySelector("#segundo-numero");
const seleccion = document.querySelector("#est");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "Cantidad de items: " +firstNumber +"</p>"  ;
  div.innerHTML += "<p>"+ "Precio por item: " + secondNumber +"</p>";
  div.innerHTML += "<p>" + "Estado: "+ seleccion.value +"</p>";
});
