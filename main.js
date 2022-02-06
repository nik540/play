

const arr = [1, 2, 3, 15, 4];
const arr1 = [2, 3, 15];
const arr2 = [1];
function milderRange(arr) {
  return arr
    .sort((a, b) => a - b)
    .map(a => a + 1)
    .filter(n => n % 2 == 0)
};

function filderRange(arr2) {
  return arr2 = arr
    .sort((a, b) => a - b)
    .map(a => a + 1)
    // .filter(n => n % 2 !== 0)
    // .includes(3)
    // .concat(arr2)
    .forEach((a, b) => {
      for (i = 0; i <= arr.length; i++) {

      }
    })
};


alert(milderRange(arr));
alert(filderRange(arr2));
// alert(arr2)
