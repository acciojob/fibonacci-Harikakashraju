// const num = 9;
function fibonacci(num) {
// your code here
	  let f = new Array(num+2); // 1 extra to handle case, n = 0
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= num; i++)
        {
            /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f[num];
}
let num= 9;
 console.log(fibonacci(num));

module.exports = fibonacci;
