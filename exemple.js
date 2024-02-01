function calculateBalance(arr) {
  if(arr.length === 0){
    return 0
  }
  const arrResult = arr.reduce(function(acc, curr) {
    return acc.reduce((a, b) => a - b) + curr.reduce((a, b) => a - b);


  })
  return arrResult

}




console.log(
  calculateBalance([
    [10, 8],
    [5, 1],
  ])
);
