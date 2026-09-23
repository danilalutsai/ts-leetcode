// https://leetcode.com/problems/reverse-string-prefix/description/

function reversePrefix(str: string, num: number): string {
  const result = [];

  const left = str.slice(0, num).split('').reverse();
  const right = str.slice(num).split('');

  result.push(...left, ...right);

  return result.join('');
}

console.log(reversePrefix('abcd', 2));
