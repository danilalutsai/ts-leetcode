// https://leetcode.com/problems/concatenation-of-array/description/

function getConcatenation(nums: number[]): number[] {
  let ans: any[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
};

console.log(getConcatenation([0,1,2]));
