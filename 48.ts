// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(range: number): string[] {

  let result = [];

  for (let i = 1; i < range + 1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(i.toString());
    }
  }
  console.log(result);
  return result;
}

console.log(fizzBuzz(15));

