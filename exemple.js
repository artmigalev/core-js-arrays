function insertItem(arr, n) {
  return n === 0 ? arr.slice(-n) : [];
}
console.log(insertItem(['a', 'b', 'c', 'd'], 0));
