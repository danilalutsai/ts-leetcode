// https://leetcode.com/problems/find-closest-person/description/

function findClosest(x: number, y: number, z: number): number {
  if (Math.abs(z - x) > Math.abs(z - y)) {
    return 1;
  } else if (Math.abs(z - x) < Math.abs(z - y)) {
    return 2;
  } else {
    return 0;
  }
};
