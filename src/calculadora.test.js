const { soma, subtrai } = require("../src/calculadora");

describe("Calculadora", () => {
  test("soma: 2 + 3 deve retornar 5", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("subtrai: 10 - 4 deve retornar 6", () => {
    expect(subtrai(10, 4)).toBe(6);
  });
});
