// https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } 

  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }

  if (target > nums.at(-1)!) {
    return nums.length;
  }

  return 0;
}

console.log(searchInsert([1,3,5], 4));

function searchInsertBinary(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

searchInsertBinary([1,2,3,4,5,7,8], 6);
