import retornarPorcentaje from "./estPorcentaje";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const second = document.querySelector("#segundo-numero");
const seleccion = document.querySelector("#est");


form.addEventListener("submit", (event) => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const selecEstado = seleccion.value;
  if (firstNumber === "" || secondNumber === "" || selecEstado === "") {
    event.preventDefault(); 
    alert("Por favor, completa todos los campos requeridos.");
  } else {
    event.preventDefault();
    div.innerHTML = "<p>" + "Cantidad de items: " + firstNumber + "</p>";
    div.innerHTML += "<p>" + "Precio por item: " + secondNumber + "</p>";
    div.innerHTML += "<p>" + "Estado: " + selecEstado + "</p>";
    div.innerHTML += "<p>" + "Porcentaje de impuesto por estado : " + retornarPorcentaje(selecEstado) + "%" + "</p>";
  }
});
