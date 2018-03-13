/* module.exports = function Calculator() {
  this.add = function(x, y) {
    return x + y;
  };
};
 */

module.exports = class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
};
