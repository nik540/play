let mas = [];
let sum1 = 0;
let sum = 0;
let index = 0;
let getSubSum = () => {
  for (i = 0; i < 3; i++) {
    mas[i] = +prompt();
  };
};
let retSubSum = function () {
  for (i = 0; i < mas.length; i++) {
    if (mas[i] < 0)
      continue;
    for (; i < mas.length; i++)
      sum += mas[i];
    // for (; index < mas.length; index - 1)
    sum1 += mas[index]
  };
  index = mas.length - 1;
}

getSubSum();
retSubSum();
alert(mas);
alert(sum);
alert(index);
alert(sum1);
