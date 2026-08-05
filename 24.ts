function mySqrt(x: number): number {
  let c: number = 0;

  for (let i = 0; i <= x; i++) {
    if (i * i <= x) {
      c = i;
    }
  }

  return c;
};

console.log(mySqrt(2147483647));
