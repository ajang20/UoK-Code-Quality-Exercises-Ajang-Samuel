function calculateMatrixSum(matrix) {
  if(!matrix) return 'Parameter must be an array of numbers'
  return matrix.flat(Infinity).reduce((acc,curr) => acc+curr,0)
}

//TEST CASES
const nestedMatrix = [
  [1, 2, [3, 4]], 
  [5, 6], 
  [[[7]], 8]
];

console.log(calculateMatrixSum(nestedMatrix)); 
console.log(calculateMatrixSum([1,3,5,36,[3,5]]))
console.log(calculateMatrixSum(null))

