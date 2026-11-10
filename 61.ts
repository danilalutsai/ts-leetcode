// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxDifference = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if ((prices[i] - minPrice) > maxDifference) {
      maxDifference = prices[i] - minPrice;
    }
  }

  return maxDifference;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1,10]));
console.log(maxProfit([2,4,1]));
