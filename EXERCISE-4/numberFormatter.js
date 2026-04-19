function formatNumber(number){
if(typeof number !== 'number') {return 'Parameter must be a number';}
return (number).toLocaleString()
}

// test cases 
console.log(formatNumber(1000))
console.log(formatNumber(1000000))
console.log(formatNumber(null))