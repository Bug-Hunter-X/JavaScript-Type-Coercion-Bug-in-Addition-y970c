function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return null; // Handle NaN values
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo('1', 2)); // 3
console.log(foo(1, '2')); // 3