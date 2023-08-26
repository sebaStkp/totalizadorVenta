import calcPrecioTot from "./precioTotal";

describe("Calcula el precio total considerando solo impuesto por estado", () => { 
    it("Muestra el precio total pero solo considerando el impuesto por el estado de CA ",() =>{
        expect(calcPrecioTot(800, "CA")).toEqual(866);
    });
});

