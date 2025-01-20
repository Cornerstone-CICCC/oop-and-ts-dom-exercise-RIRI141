class Calculator {
  constructor(num1, num2, operation) {
    this.num1 = Number(num1);
    this.num2 = Number(num2);
    this.operation = operation;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      return "UNDEFINED";
    }
    return this.num1 / this.num2;
  }
  compute() {
    let result = 0;
    if (this.operation === "add") {
      result = this.add();
    } else if (this.operation === "subtract") {
      result = this.subtract();
    } else if (this.operation === "divide") {
      result = this.divide();
    } else if (this.operation === "multiply") {
      result = this.multiply();
    }

    return result;
  }
}

document.querySelector("#calculateBtn").addEventListener("click", () => {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const operation = document.querySelector("#operation").value;
  const calculator = new Calculator(num1, num2, operation);

  document.querySelector("#result").innerHTML = calculator.compute();
});
