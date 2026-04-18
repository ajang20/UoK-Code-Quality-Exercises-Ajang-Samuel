function reverseString(str) {
  if(typeof str !== 'string') return 'Parameter must be a string'
  return str.split('').reverse().join('')
}



 //TEST CASES
console.log(reverseString('ajang')); 
console.log(reverseString(null))

