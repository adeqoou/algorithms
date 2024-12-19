function fib_eo(n) {
  if (n < 1 || n > 1e6) {
    throw new Error("Число n должно быть в диапазоне 1 ≤ n ≤ 10^6");
  }

  if (n === 1) {
    console.log("odd");
    return "odd";
  }

  if (n === 2) {
    console.log("odd");
    return "odd";
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = (prev + curr) % 10;
    prev = curr;
    curr = next;
  }

  const result = curr % 2 === 0 ? "even" : "odd";
  console.log(result);
  return result;
}

fib_eo(841645);
