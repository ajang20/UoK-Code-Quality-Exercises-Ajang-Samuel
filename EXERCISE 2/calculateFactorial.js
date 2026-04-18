function calculateFactorial(n) {
  if(typeof n !== 'number') return 'Type of parameter must be number'
  if (n === 0 || n === 1)  return 1;

   return n * calculateFactorial(n-1)
}

 console.log(calculateFactorial(4))
 console.log(calculateFactorial(1))
 console.log(calculateFactorial(null))