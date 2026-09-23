function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }

  return 0;
};

console.log(singleNumber([1,1,3,3,4,4,2,2,5]));
