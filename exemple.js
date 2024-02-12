function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((el, i) => {
    return Array.from({ length: i + 1 }).fill(el);
  });
}

console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null]));
