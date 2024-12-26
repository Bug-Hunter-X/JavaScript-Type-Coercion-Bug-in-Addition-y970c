function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b are not numbers
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo('1', 2)); // '12'
console.log(foo(1, '2')); // '12'