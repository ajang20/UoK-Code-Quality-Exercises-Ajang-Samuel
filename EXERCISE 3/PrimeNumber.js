function isPrime(number){
if(!number) return 'Parameter must be a number!'

for(let i = 2; i<number ; i++){
    if(number%2 ===0) return `${number} is not a prime number`
}

return `${number} is a prime number`
}

// test cases 
console.log(isPrime(3))
console.log(isPrime(2))
console.log(isPrime(4))