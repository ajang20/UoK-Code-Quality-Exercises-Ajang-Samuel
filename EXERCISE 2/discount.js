function discount(amount) {
  if(typeof amount !== 'number') return 'Amount must be a number'
  return  amount > 100? amount * 0.1 : amount * 0.05
}

 
 //TEST CASES
console.log(discount(1000)); 
console.log(discount(10))
console.log(discount(null))

