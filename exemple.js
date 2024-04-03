function shiftArray(arr, n) {
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      arr.unshift(arr.pop())
    }
  }
  if (n < 0) {
    for (let i = 0; i > n; i--) {
      console.log(i);
      arr.push(arr.shift());
      console.log(arr)
    }
  }
  return arr;
}

console.log(shiftArray([1, 2, 3, 4, 5], 2));
console.log(shiftArray(['a', 'b', 'c', 'd'], -1));
