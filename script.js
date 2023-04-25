function fibonacci(num) {
  // your code here
	if (num === 1 || num === 2) {
    return 1;
  } else {
    let prev1 = 1;
    let prev2 = 1;
    let current = 0;
    for (let i = 3; i <= num; i++) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return current;
}

module.exports = fibonacci;