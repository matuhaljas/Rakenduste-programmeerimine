function demonstrateCallbacks() {
  const numbers = [1, 2, 3, 4, 5];

  const double = (n) => n * 2;

  numbers.forEach((num) => {
    console.log(`${num} doubled is ${double(num)}`);
  });
}

demonstrateCallbacks();