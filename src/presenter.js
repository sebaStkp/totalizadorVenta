import descPorcentaje from "./descPorcentaje";
import retornarPorcentaje from "./estPorcentaje";
import calcPrecioNeto from "./precioNeto";
import calcPrecioTot from "./precioTotal";

const cantItem = document.querySelector("#cant-items");
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const precioItem = document.querySelector("#precio-item");
const seleccion = document.querySelector("#est");


form.addEventListener("submit", (event) => {
  const cantidadDeItems = Number.parseInt(cantItem.value);
  const precioPorItem = Number.parseInt(precioItem.value);
  const selecEstado = seleccion.value;
  const precioNeto = calcPrecioNeto(cantidadDeItems,precioPorItem);
  const precioTot = calcPrecioTot(precioNeto,selecEstado);


  if (cantidadDeItems === "" || precioPorItem === "" || selecEstado === "") {
    event.preventDefault(); 
    alert("Por favor, completa todos los campos requeridos.");
  } else {
    event.preventDefault();
    div.innerHTML += "<p>" + "Descuento: " + descPorcentaje(precioNeto)*100 + "%" + "</p>";
    
  }
});
