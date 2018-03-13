import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mortgage Calculator</h1>
        <input name="principal" />
        <input name="interestRate" />
        <input name="loanTerm" />
        <select name="period">
          <option value="12">Monthly</option>
          <option value="4">Quarterly</option>
        </select>
        <button id="calculate">Calculate</button>
        <p id="output" />
      </div>
    );
  }
}
