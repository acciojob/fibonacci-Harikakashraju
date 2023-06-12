function fibonacci(num) {
// your code here
	 if (num <= 1)
        return num;
    return fib(num-1) + fib(num-2);
}
console.log(fibonacci(num));

module.exports = fibonacci;
