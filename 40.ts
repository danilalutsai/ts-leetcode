// https://leetcode.com/problems/reverse-degree-of-a-string/description/

function reverseDegree(word: string): number {
  let total = 0;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const score = 'z'.charCodeAt(0) - char.toLowerCase().charCodeAt(0) + 1;
    total += score * (i + 1);
  }

  return total;
}

console.log(reverseDegree('abc'));

