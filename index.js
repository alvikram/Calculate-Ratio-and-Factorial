const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  let ratioTwoNum = ratioOfTwoNumbers(num1, num2);
  let fact = factorialOfNumber(num3);
  let result = {
    ratio: ratioTwoNum,
    factorial: fact,
  };
  return result;
};

module.exports = ratioAndFactorial;
