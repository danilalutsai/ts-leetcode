// https://leetcode.com/problems/add-binary/

function addBinaryAI(a: string, b: string): string {
  let i: number = a.length - 1;
  let j: number = b.length - 1;
  let carry: number = 0;
  const digits: string[] = [];

  while (i >= 0 || j >= 0 || carry !== 0) {
    let sum: number = carry;

    if (i >= 0) {
      sum += Number(a[i]);
      i--;
    }

    if (j >= 0) {
      sum += Number(b[j]);
      j--;
    }

    digits.push(String(sum % 2));
    carry = Math.floor(sum / 2);
  }

  return digits.reverse().join('');
}

console.log(addBinaryAI('11', '1'));
