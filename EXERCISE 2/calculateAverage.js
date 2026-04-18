function Average(array) {
  if(!array[0]) return 'Enter array of numbers'
  return  array.reduce((acc,curr) => acc+curr,0)/array.length
}
