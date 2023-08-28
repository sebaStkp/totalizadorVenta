import retornarPorcentaje from "./estPorcentaje";
import descPorcentaje from "./descPorcentaje";

function calcPrecioTot(pNeto, estado){
    const impuesto = retornarPorcentaje(estado)/100;
    const descuento = descPorcentaje(pNeto);
    const result = pNeto + (pNeto * impuesto) + (pNeto * descuento);
    return result;
}

export default calcPrecioTot;