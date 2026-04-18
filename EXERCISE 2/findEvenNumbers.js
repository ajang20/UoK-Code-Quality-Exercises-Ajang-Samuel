function findEvenNumbers(array) {
if(!array) return 'Parameter must be array of numbers'
  return array.filter(n => n%2 ===0 )
}

 //TEST CASES
console.log(findEvenNumbers([1000,11,23,53,21,22])); 
console.log(findEvenNumbers(null))

