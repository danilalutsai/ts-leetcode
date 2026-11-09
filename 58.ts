// https://leetcode.com/problems/merge-similar-items/

function mergeSimilarItems(items1: number[][], items2: number[][]): any {
  for (let i = 0; i < items1.length - 1; i++) {
    for (let j = 0; j < items2.length; j++) {
      console.log(items1[i][j], items2[i][j]);
    }
  }
};

console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]));
