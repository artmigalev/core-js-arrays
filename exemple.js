function isSameLength(arr) {
  const el = arr[0].length
  return arr.every((n) => n.length === el);
}
console.log(isSameLength(['cat', 'dog', 'elephant']));
