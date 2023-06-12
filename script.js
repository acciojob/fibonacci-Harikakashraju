function fibonacci(num) {
// your code here
	 if (num <= 0)
        return num;
    return fibonacci(num-1) + fibonacci(num-2);
}
//console.log(fibonacci(num));

module.exports = fibonacci;
