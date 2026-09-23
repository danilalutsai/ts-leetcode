function truncateSentence(str: string, number: number): string {
  return str.split(' ').splice(0, number).join(' ');
};

console.log(truncateSentence('hello world this is my first sentence', 4));
