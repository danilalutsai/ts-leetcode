// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/

function differenceOfSums(n: number, m: number): number {
  let sumNotDiv: number = 0;
  let sumDiv: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      sumNotDiv += i;

    } else if (i % m === 0) {
      sumDiv += i;
    }
  }

  let result: number = sumNotDiv - sumDiv
  return result;
};

console.log(differenceOfSums(5, 1));
