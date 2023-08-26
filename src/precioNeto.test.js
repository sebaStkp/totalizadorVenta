import calcPrecioNeto from "./precioNeto";
describe("devuelve el precio neto", () => {
    it("deberia retornar 15 como precio neto con 3 items y precio x item de 5", () => {
        expect(calcPrecioNeto(3, 5)).toEqual(15);
      });
});


