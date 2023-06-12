// const num = 9;
function fibonacci(num) {
// your code here
	 if (num <= 1)
        return num;
    return fibonacci(num-1) + fibonacci(num-2);
}
// console.log(fibonacci(num));

module.exports = fibonacci;
