import retornarPorcentaje from "./estPorcentaje";

function calcPrecioTot(pNeto, estado){
    const impuesto = retornarPorcentaje(estado)/100;
    const result = pNeto + (pNeto* impuesto);
    return result;
}

export default calcPrecioTot;