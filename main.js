let mas = [];
let mas1 = [];
let mas2 = [];
let sum1 = 0;
let sum = 0;
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
    for (j = mas.length; j < 20; j++) {
      mas1[j] = mas1[i] - mas1[i - 1];
    }
  }
}

getSubSum();
retSubSum();
petSubSum();
zetSubSum();
metSubSum();
alert(mas + ' mas');
alert(sum + ' sum');
alert(mas1 + ' mas1');
