function Fibonacci(n) {
  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return a;
}

console.log(Fibonacci(6));
