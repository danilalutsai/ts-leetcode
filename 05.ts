// https://leetcode.com/problems/add-two-promises/description/

type P = Promise<number>
const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(5), 60));

async function addTwoPromises(promise1: P, promise2: P): P  {
  const [a, b] = await Promise.all([promise1, promise2]);
  return a + b
};

addTwoPromises(promise1, promise2).then(console.log);
