const expect = require("chai").expect;
const Mortgage = require("../../src/js/lib/Mortgage");

describe("Mortgage Calculator", () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Mortgage(100000, 3.92, 30);
  });

  it("should have a monthly payment getter", () => {
    expect(calculator.monthlyPayment).to.exist;
  });

  it("should return the correct mortgage period", () => {
    expect(calculator.monthlyPayment).to.equal("473");
  });
});
