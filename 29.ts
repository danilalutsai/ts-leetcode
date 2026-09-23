// https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];
    
  for (let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1);
    const prev: number[] = triangle[i - 1];

    for (let j = 1; j < i; j++) {
      row[j] = prev[j - 1] + prev[j];
    }

    triangle.push(row);
  }

  return triangle;
};

generate(5);

function getRow(rowIndex: number): number[] {
  let prev: number[] = [];

  for (let i = 0; i <= rowIndex; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = prev[j - 1] + prev[j];
    }

    prev = row;
  }
  
  return prev;
}

console.log(getRow(10));
