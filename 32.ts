function isHappy(num: number): boolean {
  const seen = new Set<number>()
  while (num !== 1 && !seen.has(num)) {
    seen.add(num)
    num = String(num)
      .split('')
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0)
  }
  return num === 1
}

console.log(isHappy(19));
