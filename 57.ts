// https://leetcode.com/problems/baseball-game

function calPoints(operations: string[]): number {

  let arr: number[] = [];
  
  for (const op of operations) {
    switch (op) {
      case '+':
        arr.push(arr.at(-1)! + arr.at(-2)!);
        break;
      case 'D':
        arr.push(arr.at(-1)! * 2);
        break;
      case 'C':
        arr.pop();
        break;
      default:
        arr.push(Number(op));
    }
  }

  return arr.reduce((acc, num) => acc + num, 0);
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
