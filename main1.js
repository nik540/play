"use strict";
const arr = [1, 2, 3, 15,3, 4];
const arr1 = [6, 2,3, 11];
let arr2=[];
let a=0;
function nilderRange(mas, mas1,mas2) {
   for (let i = 0; i < mas.length; i++) {
      for (let j = 0; j < mas1.length; j++) {
         if (mas[i] == mas1[j]) {
            mas2[a]=mas[i];
            a+=1
         }
         else continue;
      }
   }
   return mas2
};
alert(nilderRange(arr, arr1,arr2));
