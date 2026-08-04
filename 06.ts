// https://leetcode.com/problems/concatenate-array-with-reverse/description/

function concatWithReverse(nums: number[]): number[] {
  const reverse = nums.toReversed();
  const result = [];
  for (const num of nums) {
    result.push(num);
  }
  for (const num of reverse) {
    result.push(num);
  }
  return result
}

console.log(concatWithReverse([1,2,3]));
