// https://leetcode.com/problems/climbing-stairs

function climbStairs(n: number): number {
  // Handle n = 1 -> only one step
  if (n === 1) {
    return 1;
  }

  // One stair -> one path
  let prev: number = 1;
  // Two stairs -> two paths
  let curr: number = 2;

  // Start with 3 as we already got 1 or 2 stairs
  // n is the stair we actually need but we have to pass through all the stairs before n
  for (let i = 3; i <= n; i++) {
    // 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> 21 -> 34 -> 55 -> 89
    const next: number = prev + curr;
    // prev becomes curr
    prev = curr;
    // curr becomes next
    curr = next;
  }

  return curr; // 89
};

console.log(climbStairs(10));
