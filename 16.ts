// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

function finalValueAfterOperations(operations: string[]): number {
  let x: number = 0;

  for (const oper of operations) {
    if (oper === 'X--' || oper === '--X') {
      x -= 1;
    } else {
      x += 1;
    }
  }

  return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));
console.log(finalValueAfterOperations(["++X","++X","X++"]));
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
