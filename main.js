let mas = [];
let mas1 = [];
let mas2 = [];
let mas3 = [];
let mas4 = [];
let sum = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

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
  for (i = mas.length - 1; i >= 0; i--) {
    if (mas[mas.length - 1] < 0) {
      mas.pop();
    }
  }
}
function zetSubSum() {
  for (i = 0; i < mas.length; i++) {
    sum += mas[i];
  }
}
function metSubSum() {
  for (i = 0; i < mas.length; i++) {
    sum1 += mas[i];
    mas1[i] = sum1;
  }
  for (i = 0; i < mas.length; i++) {
    sum3 = sum2;
    sum2 += mas[i];
    mas2[i] = sum2;

  };

  // for (i = 0; i < mas1.length; i++) {
  // mas3.push(mas1[i] + mas2[i]);
  // };
  // mas4 = mas1.concat(mas2);
  // mas4 = [].concat(mas1, mas2)

};
getSubSum();
retSubSum();
petSubSum();
zetSubSum();
metSubSum();
// alert(mas + ' mas');
// alert(sum + ' sum');
alert(mas1 + ' mas1');
alert(mas2 + ' mas2');
// alert(sum1 + ' sum1');
// alert(mas3);
// alert(mas4);
