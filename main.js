let mas = [];
let mas1 = [];
let sum = 0;
let t = 0;
let max = 0;
function getSubSum() {
  for (i = 0; i < 5; i++) {
    mas[i] = +prompt();
  };
};
function metSubSum() {
  for (j = 0; j < mas.length; j++) {
    sum = 0;
    for (i = j; i < mas.length; i++) {
      t += 1;
      sum += mas[i];
      mas1[t] = sum;
    };
  };
};
function getMaxSubSum() {
  for (i = 0; i <= t; i++) {
    if (mas1[i] > max) {
      max = mas1[i];
    };
  };
  return max;
};
getSubSum();
metSubSum();
getMaxSubSum();
alert(mas1 + ' mas1');
alert(max + ' max');
