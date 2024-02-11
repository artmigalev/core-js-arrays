function findCommonElements(arr1, arr2) {
  return arr1
    .map((_, i, arr) => {
      return arr2.map((el) => {
        return el === arr[i] ? el : undefined;
      });
    })
    .flat(2)
    .filter((el) => el !== undefined);
}

console.log(
  findCommonElements([1, 2, 3], [2, 3, 4]) /* [ 2, 3 ]*/,
  findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) /*[ 'b', 'c' ]*/,
  findCommonElements([1, 2, 3], ['a', 'b', 'c']) /*[]*/
);
