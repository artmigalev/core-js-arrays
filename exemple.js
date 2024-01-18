function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const result = arr.reduce((x, y) => x + y, 0) / arr.length;

  if (result % 1 !== 0) {
    return parseFloat(result.toFixed(2));
  }

  return result;
}
console.log(getAverage([1, 10, 100, 1000]));
