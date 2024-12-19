function fib(n) {
  if (n < 1 || n > 40) {
    throw new Error("Число n должно быть в диапазоне 1 ≤ n ≤ 40");
  }

  const fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (fibArray[i] === undefined) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  }

  console.log(fibArray.slice(0, n + 1));
  return fibArray.slice(0, n + 1);
}

fib(8);
