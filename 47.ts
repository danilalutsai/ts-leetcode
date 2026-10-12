// https://leetcode.com/problems/transform-array-by-parity/

function transformArray(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = 0;
    } else if (nums[i] % 2 !== 0) {
      nums[i] = 1;
    }
  }
  return nums.sort((a, b) => a - b);
};

console.log(transformArray([4,3,2,1]));
