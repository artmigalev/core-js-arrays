function insertItem(arr, n) {

  return n === 0 ? [] : arr.slice(0,n)
}
console.log(insertItem([1, 3, 4, 5], 0));
