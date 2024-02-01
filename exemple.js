

function nArr (n,size) {
  const arr = new Array(size).fill(0)
  console.log(arr)
  return arr.map(el => Array(n).fill(arr)).length
}

console.log(nArr(4,2))
