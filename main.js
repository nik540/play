let mas = [];
let sum = 0;
let getSubSum = () => {
  for (i = 0; i < 5; i++) {
    mas[i] = +prompt();
    if (mas[i] < 0) continue;
    sum += mas[i];
    if (mas[i] < 0) break;
  };
};
getSubSum();
alert(mas);
alert(sum);