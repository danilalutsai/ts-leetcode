function mirrorDistance(num: number): number {
  const reversed = Number((String(num)).split("").reverse().join(''));
  const result = reversed - num
  return Math.abs(result);
};

console.log(mirrorDistance(10));


function mirrorDistanceMath(num: number): number {
  let copy: number = num;
  let reversed: number = 0;

  while (copy > 0) {
    reversed = reversed * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return Math.abs(num - reversed);
}

console.log(mirrorDistanceMath(10));


function mirrorDistanceStr(num: number): number {
  const reversed = Number([...String(num)].reverse().join(''));
  return (num - reversed);
}

console.log(mirrorDistanceStr(10));
