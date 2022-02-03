
function filterRange(a, b) {
  let arr1 = [];
  for (i = 0; i < b; i++) {
    arr1[i] = a + i;
  };
  return arr1.sort(fn)
}
alert(filterRange(1, 4));

function fn(arr)