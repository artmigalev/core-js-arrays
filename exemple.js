function getFalsyValuesCount(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const res = arr.filter((_, i , arr) => !arr[i])

  return res.length
}

console.log(getFalsyValuesCount([null, undefined, NaN, false, 0, ''])); /* 6*/
// console.log(getFalsyValuesCount([])); /* 0*/
console.log(getFalsyValuesCount([1, '', 3])); /* 1*/
console.log(getFalsyValuesCount([-1, 'false', null, 0])); /* 2*/
