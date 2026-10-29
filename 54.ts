// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

function findGCD(nums: number[]): number {
  let largest = nums[0];
  let smallest = nums[0];

  for (const num of nums) {
    if (num > largest) largest = num;
    if (num < smallest) smallest = num;
  }

  while (smallest !== 0) {
    [largest, smallest] = [smallest, largest % smallest];
  }

  return largest;
}

console.log(findGCD([5,10]));
