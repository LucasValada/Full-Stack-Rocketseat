import { sum } from "./sum";

describe("sum", () => {
  beforeAll(() => {
    // console.log("Executa uma vez antes de todos os testes");
    // sumResult = 10;
  });

  it("should do sum of 1 + 2", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });

  afterAll(() => {
    // console.log("Executa uma vez depois de todos os testes");
  });
});
