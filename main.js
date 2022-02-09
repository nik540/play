
/*"use strict";
const arr = [1, 2, 3, 15, 4];
const arr1 = [6, 11, 7];
const arr2 = [9, 1];

function milderRange(mas, mas1) {
  return mas
    .sort((a, b) => a - b)//изменяет исходный
    .map(a => a + 1)//не изм исх
    .filter(n => n % 2 == 0)//не изм исх
    .concat(mas1)//не изм исх
    //.includes(5)//не изм исх
    .reduce((total, element) => total += element)//не изм исх
};

const map = (arr3, fn) => {
  return arr3.reduce((total, element) => {
    return [...total, fn(element)]
  }, [])
};

alert(milderRange(arr, arr1));
alert(arr);
alert(map(arr, n => n + 1))*/
