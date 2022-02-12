"use strict";
const arr = [1, 2, 3, 15, 3, 4];
const arr1 = [];
const arr2 = [];
const arr3 = [];
let a = 1;
let b = 12;
let c = 0;
let d = 0;

if (a < b) {
   c = a;
   d = b;
   b = c;
   a = d;
}


function miderRange(it, it1, mas1) {
   for (let i = 0; i <= it - 1; i++) {
      mas1[i] = it1;
      it1 += 1;
   }
   return mas1;
}

function nilderRange(mas, mas1, mas2) {
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
};
alert(miderRange(a, b, arr1));
alert(nilderRange(arr, arr1, arr2));
