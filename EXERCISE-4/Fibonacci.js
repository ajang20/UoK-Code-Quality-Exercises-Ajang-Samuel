function Fibonacci(n){
   let [a,b] = [0,1]
   const arr = []
   
  for(let i=0;i<n;i++){
    arr.push(a)
      let next = a + b
       a = b;
       b = next;
       
   }
   
  return  arr
}

console.log(Fibonacci(6))
console.log(Fibonacci(8))