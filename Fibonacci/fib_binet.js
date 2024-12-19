function fib(n) {
  if (n < 1 || n > 64) {
    throw new Error("Число n должно быть в диапазоне 1 ≤ n ≤ 64");
  }

  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  const fibNumber = Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);

  console.log(fibNumber);
  return fibNumber;
}

fib(32);
