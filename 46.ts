// https://leetcode.com/problems/gcd-of-odd-and-even-sums/

function gcdOfOddEvenSums(n: number): number {
  let odds: number[] = [];
  let even: number[] = [];

  // go through all (numbers < n) -> odds/even
  for (let i = 0; i < n; i++) {
    odds.push(2 * i + 1);
    console.log(`odds:`, odds);

    even.push(2 * i + 2);
    console.log(`even:`, even);
  }

  const totalOdds = odds.reduce((acc, num) => acc + num, 0);
  const totalEven = even.reduce((acc, num) => acc + num, 0);

  return totalEven - totalOdds;
};

console.log(gcdOfOddEvenSums(4));
