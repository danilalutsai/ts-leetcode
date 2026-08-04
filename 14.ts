// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

function minimumOperations(nums: number[]): number {
  let result: number = 0;

  for (const num of nums) {
    const ans = num % 3

    if (ans !== 0) {
      result++;
    }
  }

  return result
};

console.log(minimumOperations([1,2,3,4]));
