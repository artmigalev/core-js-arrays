function getMaxItems(arr, n) {
  return arr
    .sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    })
    .slice(0, n);
}
console.log(
  getMaxItems([], 5) /* []*/,
  getMaxItems([1, 2], 1) /* [ 2]*/,
  getMaxItems([2, 3, 1], 2) /* [ 3, 2]*/,
  getMaxItems([10, 2, 7, 5, 3, -5], 3) /* [ 10, 7, 5 ]*/,
  getMaxItems([10, 10, 10, 10], 3) /* [ 10, 10, 10 ]*/
);
