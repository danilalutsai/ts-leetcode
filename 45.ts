// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

function getSneakyNumbers(nums: number[]): number[] {
  const counts = new Map<number, number>();
  const result: number[] = [];

  for (const num of nums) {
    const count = counts.get(num) ?? 0;
    counts.set(num, count + 1);
  }

  for (const [num, count] of counts) {
    if (count > 1) {
      result.push(num);
    }
  }

  return result;
}

console.log(getSneakyNumbers([1,1,2,3,3,5,6]));
