let mas = [];
let sum = 0;
let sumInput = () => {
  for (i = 0; ; i++) {
    mas[i] = prompt();
    if (mas[i] === null || mas[i] === "" || !isFinite(mas[i])) {
      mas.pop();
      break;
    };
    sum += +mas[i];
  }
};
sumInput();
alert(mas);
alert(sum);