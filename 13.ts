// https://leetcode.com/problems/build-array-from-permutation/description/

function buildArray(nums: number[]): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[nums[i]]);
  }

  return ans;
};

console.log(buildArray([0,2,1,5,3,4]));
