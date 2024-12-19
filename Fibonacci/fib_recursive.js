function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

function measureTime(n) {
  const startTime = Date.now();
  const result = fib(n);
  const endTime = Date.now();

  console.log(
    `fib(${n}) = ${result}, время выполнения: ${endTime - startTime} мс`
  );
}

measureTime(4);
measureTime(10);
measureTime(14);
measureTime(23);
measureTime(30);
