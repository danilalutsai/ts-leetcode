// https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

function countDigits(num: number): number {
  const text: string = String(num);
  let count: number = 0;

  for (let i = 0; i < text.length; i++) {
    const digit = Number(text[i]);

    if (digit !== 0 && num % digit === 0) {
      count++;
    }
  }
  return count;
}

console.log(countDigits(123));
