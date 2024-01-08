function sumArrays( arr1, arr2) {
  if (Array.of(arr1,arr2).some(arr => {return arr.length === 0})){
    return arr1.length > arr2.length ? arr1: arr2;
  }
  const lengthAR = arr1.length > arr2.length ? arr1.length : arr2.length;

  return Array.from({ length: lengthAR },(_, i) => {
    if( arr1[i] === undefined) {
      return arr2[i];
    }else if(arr2[i] === undefined){
      return arr1[i]
    }

    return arr1[i] + arr2[i]
  })
}
console.log(sumArrays([-1, 0, 1, 4, 5, 5, 5], [6]));

