// https://leetcode.com/problems/number-of-good-pairs/

function numIdenticalPairs(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result += 1;
      }
    }
  }

  return result;
};

console.log(numIdenticalPairs([0,1,2,3,4]), 2);
