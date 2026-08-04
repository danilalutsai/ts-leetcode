// https://leetcode.com/problems/score-of-a-string/description/

function scoreOfString(str: string): number {
  let total = 0;

  for (let i = 0; i < str.length - 1; i++) {
    const difference = Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1))
    total += difference;
  }

  return total;
}

console.log(scoreOfString('zaz'));
