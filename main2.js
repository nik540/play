"use strict";
const arr = [1, 2, 3, 15, 3, 4];
const arr1 = [];
const arr2 = [];
const ad = 12;
const bt = 1;

/*function miderRange(it, it1, mas1) {
 if (it < it1) {
    let c = it;
    let d = it1;
    it1 = c;
    it = d;
 }
 for (let i = 0; i <= it - 1; i++) {
    mas1[i] = it1;
    it1 += 1;
 }
 return mas1;
}*/

/*  function nilderRange(mas, mas1, mas2) {
   let a = 0;
   for (let i = 0; i < mas.length; i++) {
      for (let j = 0; j < mas1.length; j++) {
         if (mas[i] == mas1[j]) {
            mas2[a] = mas[i];
            a += 1;
         }
         else continue;
      }
   }
   return mas2
}*/

// function lilderRange(mas, it, it1) {
// return mas
// .filter(a => a <= it && a >= it1)
// }

function vilderRange(mas, it, it1) {
   return mas
      .forEach(a => a <= it && a >= it1)
   // .sort((a, b) => a - b)
}
// alert(miderRange(ad, bt, arr1));
// alert(nilderRange(arr, arr1, arr2));
// alert(lilderRange(arr, ad, bt));
alert(vilderRange(arr, ad, bt));
alert(arr);
