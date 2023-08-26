import retornarPorcentaje from "./estPorcentaje";

describe("retorna porcentaje", () => {
    it("deberia retornar 6.65 en base al estado UT", () => {
      expect(retornarPorcentaje("UT")).toEqual(6.65);
    });
    it("deberia retornar 8 en base al estado NV", () => {
      expect(retornarPorcentaje("NV")).toEqual(8);
    });
    it("deberia retornar 6.25 en base al estado TX", () => {
      expect(retornarPorcentaje("TX")).toEqual(6.25);
    });
    it("deberia retornar 4 en base al estado AL", () => {
      expect(retornarPorcentaje("AL")).toEqual(4);
    });
    it("deberia retornar 8.25 en base al estado CA", () => {
      expect(retornarPorcentaje("CA")).toEqual(8.25);
    });
    it("deberia retornar 0 si no se selecciona un estado", () => {
      expect(retornarPorcentaje("Seleccionar estado")).toEqual(0);
    });
  });
  