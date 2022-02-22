'use strict';
function Calculator() {
   this.calculate = function (str) {

      if (str[2] == '+') {
         return str.split('').filter(n => n != 0 && n != '+')
            .map(a => +a).reduce((a, b) => + (a + b))
      }
      else if (str[2] == '-') {
         return str.split('').filter(n => n != 0 && n != '-')
            .map(a => +a).reduce((a, b) => +(a - b))
      }
   }
   this.addMethod = function (name, func) {

   };
}
let calc = new Calculator;
let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
let result = powerCalc.calculate('2 * 3');

alert(calc.calculate('3 - 7'));
// alert(result);