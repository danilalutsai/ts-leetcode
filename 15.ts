// https://leetcode.com/problems/find-missing-elements/description/?envType=daily-question&envId=2026-08-04

function findMissingElements(nums: number[]): number[] {
  const result: number[] = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findMissingElements([1,4,2,5])); // 3
