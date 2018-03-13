module.exports = class Mortgage {
  constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
  }

  get monthlyPayment() {
    const p = this.principal;
    const i = this.interest / 100 / 12;
    const t = this.term * 12;
    let period;

    const numerator = i * Math.pow(1 + i, t);
    console.log(numerator);
    const denominator = Math.pow(1 + i, t) - 1;
    console.log(numerator);

    period = p * (numerator / denominator);
    period = period.toFixed(0);
    return period;
  }
};
