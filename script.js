// const num = 9;
function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num < 0 || num > 50) {
    return "Invalid input. The number must be between 0 and 50.";
  }

  let fibPrev = 1;
  let fibCurrent = 1;

  for (let i = 3; i <= num; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }

  return fibCurrent;
}

// Example usage:
// const num = prompt("Enter a number between 0 and 50:");
// const result = fibonacci((num));
// console.log(result);


module.exports = fibonacci;
