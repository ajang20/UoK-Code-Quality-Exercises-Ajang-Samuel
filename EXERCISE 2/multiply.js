function multiply(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number') return 'Parameters must be numbers'
  return x * y;
}


 //TEST CASES
console.log(multiply(1,3)); 
console.log(multiply(null))

