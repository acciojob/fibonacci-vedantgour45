function fibonacci(num) {
// your code here
	int fib = [0, 1];

	return fibonacci(fib[0]-1)+fibonacci(fib[1]-2);
}

module.exports = fibonacci;
