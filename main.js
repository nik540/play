
"use strict";
const arr = [1, 2, 3, 15, 4];
const arr1 = [6, 11, 7];
const arr2 = [9, 1];

function milderRange(arr2) {
  return arr2 = arr
    .sort((a, b) => a - b)//изменяет исходный
    .map(a => a + 1)//не изм исх
    .filter(n => n % 2 == 0)//не изм исх
    .concat(arr1)//не изм исх
    //.includes(5)//не изм исх
    //.reduce((total, item, index, array) => { total += item }, 0)//не изм исх
    .reduce(function (to))
};
const a = arr.reduce((total, item, index, array) => {
  total.push(item + 1)
  return total
}, []);//вернет новый мас
// function filderRange(arr2) {
// return arr2 = arr



alert(milderRange(arr2));
// alert(filderRange(arr2));
// alert(arr2)
alert(arr);
alert(a);
