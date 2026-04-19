
function removeDuplicates(array){
    return [...new Set(array)]
}

// test cases 
console.log(removeDuplicates([1,2,3,4,4,5,5,6]))
console.log(removeDuplicates(['q','q',1,2,4,4]))