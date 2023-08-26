import retornarPorcentaje from "./estPorcentaje";
import calcPrecioNeto from "./precioNeto";

const cantItem = document.querySelector("#cant-items");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const precioItem = document.querySelector("#precio-item");
const seleccion = document.querySelector("#est");


form.addEventListener("submit", (event) => {
  const cantidadDeItems = Number.parseInt(cantItem.value);
  const precioPorItem = Number.parseInt(precioItem.value);
  const selecEstado = seleccion.value;
  if (cantidadDeItems === "" || precioPorItem === "" || selecEstado === "") {
    event.preventDefault(); 
    alert("Por favor, completa todos los campos requeridos.");
  } else {
    event.preventDefault();
    div.innerHTML = "<p>" + "Cantidad de items: " + cantidadDeItems + "</p>";
    div.innerHTML += "<p>" + "Precio por item: " + precioPorItem + "</p>";
    div.innerHTML += "<p>" + "Estado: " + selecEstado + "</p>";
    div.innerHTML += "<p>" + "Porcentaje de impuesto por estado : " + retornarPorcentaje(selecEstado) + "%" + "</p>";
    div.innerHTML += "<p>" + "Precio neto: " + calcPrecioNeto(cantidadDeItems,precioPorItem) + "</p>"
  }
});
