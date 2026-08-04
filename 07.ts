// https://leetcode.com/problems/digit-frequency-score/description/

function digitFrequencyScore(num: number): number {
  let copy: number = num;
  let total: number = 0;

  while (copy > 0) {
    total += copy % 10;
    copy = Math.floor(copy / 10);
  }

  return total;
}

console.log(digitFrequencyScore(1500214));

