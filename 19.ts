// https://leetcode.com/problems/compute-alternating-sum/description/

function alternatingSum(nums: number[]): number {
  let result: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result += nums[i];
    } else {
      result -= nums[i];
    }
  }

  return result;
};

console.log(alternatingSum([1,3,5,7]));
