// https://leetcode.com/problems/merge-sorted-array/description/

/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort((a,b) => a - b);
};

merge([1,2,3,0,0], 3, [2,5,6], 3);
