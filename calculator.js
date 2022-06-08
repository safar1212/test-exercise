class Calculator {
   static add = (firstNumber, secondNumber) => {
      return firstNumber + secondNumber;
   }
  static subtract = (firstNumber, secondNumber) => {
       return firstNumber - secondNumber;
   }
  static multiply = (firstNumber, secondNumber) => {
       return firstNumber * secondNumber;
   }
  static divide = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
      return 'Divide by zero error';
    }
    return firstNumber / secondNumber;
  }
}

module.exports = Calculator;
