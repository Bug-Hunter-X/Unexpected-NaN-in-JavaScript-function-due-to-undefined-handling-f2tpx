function foo(x) {
  if (x === null || x === undefined) {
    return -1; // Handle null and undefined cases
  } else if (x < 0) {
    return -1; 
  } else {
    return x * 2; 
  }
}

console.log(foo(null)); // -1
console.log(foo(-1));  // -1
console.log(foo(5));   // 10
console.log(foo(undefined));// -1