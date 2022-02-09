"use strict";
const arr = [1, 2, 3, 15, 4];
const arr1 = [6, 2, 11];
function nilderRange(mas, mas1) {
   for (let i = 0; i < mas.length; i++) {
      for (let j = 0; j < mas1.length; j++) {
         if (mas[i] == mas1[j]) {
            return mas1[j];
         }
      }
   }
};
alert(nilderRange(arr, arr1));
