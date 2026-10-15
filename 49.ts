// https://leetcode.com/problems/array-wrapper/description/

class ArrayWrapper {

  constructor(public nums: number[]) {}

  valueOf(): number {
    return this.nums.reduce((acc, sum) => acc + sum, 0);
  }

  toString(): string {
    return "[" + this.nums.toString() + "]";
  }
};


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
