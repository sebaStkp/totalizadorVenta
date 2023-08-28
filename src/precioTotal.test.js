import calcPrecioTot from "./precioTotal";

describe("Calcula el precio total considerando solo impuesto por estado", () => { 
    it("Muestra el precio total pero solo considerando el impuesto por el estado de CA ",() =>{
        expect(calcPrecioTot(800, "CA")).toEqual(866);
    });
    it("Muestra el precio total pero solo considerando el impuesto por el estado de TX ",() =>{
        expect(calcPrecioTot(800, "TX")).toEqual(850);
    });
    it("Muestra el precio total pero solo considerando el impuesto por el estado de AL ",() =>{
        expect(calcPrecioTot(800, "AL")).toEqual(832);
    });
});

