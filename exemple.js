function isValueEqualsIndex(arr ) {
  return arr.some(n => n === arr[n])
}
console.log(isValueEqualsIndex([2, 10, 0, 4, 5]));
