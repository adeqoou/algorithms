function fib(n) {
  if (n < 1 || n > 32) {
    return "Число должно быть от 1 до 32";
  }

  if (n <= 2) return 1;

  let prev = 1;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    let temp = current;
    current = prev + current;
    prev = temp;
  }

  return current;
}

function measureTime(n) {
  const startTime = Date.now();
  const result = fib(n);
  const endTime = Date.now();

  console.log(
    `fib(${n}) = ${result}, время выполнения: ${endTime - startTime} мс`
  );
}

console.log("Тестирование производительности:");
measureTime(5);
measureTime(10);
measureTime(15);
measureTime(20);
measureTime(30);
