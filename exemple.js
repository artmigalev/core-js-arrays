function findAllOccurrences(arr, item) {
  const result = arr.filter((el) => el === item);
  return result.length;
}

console.log(findAllOccurrences([0, 0, 1, 1, 1, 2], 1));
