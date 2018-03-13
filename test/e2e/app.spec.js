const express = require("express");
const expect = require("chai").expect;
const path = require("path");
const Nightmare = require("nightmare");

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../dist")));

const url = "http://localhost:8888";

const nightmare = new Nightmare();

describe("End to End Tests", () => {
  let httpServer = null;
  let pageObject = null;

  before(done => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after(done => {
    httpServer.close();
    done();
  });

  it("should contain an <h1> element for the page title", () => {
    pageObject.evaluate(() => document.querySelector("h1").innerText).then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal("Mortgage Calculator");
    });
  });

  it("should contain an input for principal", () => {
    pageObject.evaluate(() => document.getElementsByName("principal")[0]).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should contain an input for interest rate", () => {
    pageObject.evaluate(() => document.getElementsByName("interestRate")[0]).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should contain an input for term", () => {
    pageObject.evaluate(() => document.getElementsByName("loanTerm")[0]).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should contain an input for period", () => {
    pageObject.evaluate(() => document.getElementsByName("period")[0]).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should contain a calculate button", () => {
    pageObject.evaluate(() => document.getElementById("calculate")).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should contain an output paragraph", () => {
    pageObject.evaluate(() => document.getElementById("output")).then(inputEl => {
      expect(inputEl).to.exist;
    });
  });

  it("should correctly calculate mortgage", () =>
    pageObject
      .wait()
      .type("input[name=principal]", 300000)
      .type("input[name=interestRate]", 3.75)
      .type("input[name=loanTerm]", 30)
      .select("select[name=period]", 12)
      .click("button#calculate")
      .wait("#output")
      .evaluate(() => document.querySelector("#output").innerText)
      .then(outputText => {
        expect(outputText).to.equal("$1389.35");
      })).timeout(6500);
});
