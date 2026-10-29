// https://leetcode.com/problems/score-of-a-string/

function scoreOfString(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] !== undefined) {
      result += Math.abs((s[i].charCodeAt(0)) - (s[i + 1].charCodeAt(0)));
    } else {
      continue;
    }
  }

  return result;
};

console.log(scoreOfString('hello'));
console.log(scoreOfString('zaz'));
