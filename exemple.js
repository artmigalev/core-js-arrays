function getIntervalArray(start, end) {
  // return Array.from((el, i) => (i < end += start));
  return Array.from({ length: (end - start)+1  }, (_, i) => start + i);
}
console.log(getIntervalArray(0,99));
