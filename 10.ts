// https://leetcode.com/problems/restore-finishing-order/description/

// Better practices here would be to create a Set and then check the copied Set
function recoverOrder(order: number[], friends: number[]): number[] {
  const friendsSet = new Set(friends);
  const result: number[] = [];

  for (const id of order) {
    if (friendsSet.has(id)) {
      result.push(id);
      console.log(result);
    }
  }

  return result;
};

function recoverOrderShorter(order: number[], friends: number[]): number[] {
  return order.filter(id => friends.includes(id));
}

console.log(recoverOrderShorter([3,1,2,5,4], [1,3,4]));

recoverOrder([3,1,2,5,4], [1,3,4]);
