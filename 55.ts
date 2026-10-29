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


function scoreOfStringEasiest(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
      result += Math.abs((s[i].charCodeAt(0)) - (s[i + 1].charCodeAt(0)));
    }

  return result;
};

console.log(scoreOfString('hello')); // 13
console.log(scoreOfStringEasiest('zaz')); // 50
