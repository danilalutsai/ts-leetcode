// https://leetcode.com/problems/number-of-segments-in-a-string/description/

function countSegments(s: string): number {
  const arr = s.split(' ');
  let result = 0;

  for (const segment of arr) {
    if (segment) {
      result++;
    } else if (segment === '' || segment === ' ') {
      continue;
    }
  }

  return result;
};
