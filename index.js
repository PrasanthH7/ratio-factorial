const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};

module.exports = ratioFactorial;
