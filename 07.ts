function digitFrequency(num: number): number {
  let copy: number = num;
  let total: number = 0;

  while (copy > 0) {
    total += num % 10;
    copy = Math.floor(copy / 10);
  }

  return total;
}

console.log(digitFrequency(1500214));

