function arraySumRecursively(array){
    if(!Array.isArray(array)) return 'Enter array of numbers'
    if(array.length ===0 ) return 0;
    
const arr = array.splice(0,1)
return Number(arr) + arraySumRecursively(array)
}

// test cases 
console.log(arraySumRecursively([1,2,3,6]))
console.log(arraySumRecursively([1,2,4,4]))
console.log(arraySumRecursively(null))