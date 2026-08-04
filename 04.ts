// https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/description/

function minOperations(nums: number[], k: number): number {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  return sum % k;
}

console.log(minOperations([3,10,7], 5));
