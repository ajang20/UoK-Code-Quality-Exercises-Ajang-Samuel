
//Recursive function to check the level of nesting
function levelOfNesting (arr){
    if(!Array.isArray(arr)) return 0;
    if(arr.length === 0) return 1;
    return 1 + Math.max(...arr.map( ele => levelOfNesting(ele)))
}


//returns an object with the level of nesting and the flattened array
const flatten =  (array) => ({level:levelOfNesting(array),flattenedArray:array.flat(Infinity)})

//test cases 
console.log(flatten([1, [2], 3]))
console.log(flatten([[], [[]], [[[]]]]))
console.log(flatten([[1, [2, [3, [4]]]]]))
console.log(flatten([[1, 2, 3]]))
console.log(flatten([1, [2], [3, [4, [5]]]]))