let mas = [];
let sum1 = 0;
let sum = 0;
let index = 0;

function getSubSum() {
  for (i = 0; i < 5; i++) {
    mas[i] = +prompt();
  };
};
function retSubSum() {
  for (i = 0; i < mas.length; i++) {
    if (mas[0] < 0) {
      mas.shift();
    }
  }
}
function petSubSum() {
  for (i = ((mas.length) - 1); i >= 0; i--) {
    if (mas[(mas.length) - 1] < 0) {
      mas.pop();
    }
  };

};
getSubSum();
retSubSum();
petSubSum();
alert(mas);
// alert(sum);
