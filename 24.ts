// https://leetcode.com/problems/sqrtx/description/

function mySqrt(x: number): number {
  let c: number = 0;

  for (let i = 0; i <= x; i++) {
    if (i * i <= x) {
      c = i;
    }
  }

  return c;
};

// first run binaryCount then regular mySqrt to see time difference
console.log(binaryCount(21474836471)); // less than 1 second
console.log(mySqrt(21474836471)); // 22 seconds


// with binary search
function binaryCount(num: number) {
  let low: number = 0;
  let high: number = num;
  let result: number = 0;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);

    if (mid * mid === num) {
      return mid;
    }

    if (mid * mid < num) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

