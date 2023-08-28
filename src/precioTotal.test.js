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
    it("Muestra el precio total pero solo considerando el impuesto por el estado de NV ",() =>{
        expect(calcPrecioTot(800, "NV")).toEqual(864);
    });
    it("Muestra el precio total pero solo considerando el impuesto por el estado de UT ",() =>{
        expect(calcPrecioTot(800, "UT")).toEqual(853.2);
    });
    it("Muestra el precio total considerando el impuesto y el descuento correspondiente a 1000 ",() =>{
        expect(calcPrecioTot(1000, "UT")).toEqual(1096.5);
    });
});

