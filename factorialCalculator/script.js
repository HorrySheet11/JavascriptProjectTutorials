let num = 5;

function factorialCalculator(num){
  let result = 1;
  for (let count = 1; count <= num; count++){
    result *= count;
  }
  return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
