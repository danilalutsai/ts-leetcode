// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

function countPairs(nums: number[], target: number): number {
  const n: number = nums.length;
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target > (nums[i] + nums[j])) {
        count += 1;
      }
    }
  }
  return count;
}
