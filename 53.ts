// https://leetcode.com/problems/capitalize-the-title/

function capitalizeTitle(title: string): string {
  const splitted = title.split(' ');
  let result = [];

  for (let word of splitted) {
    if (word.length < 3) {
      result.push(word.toLowerCase());
    } else {
      result.push(word.charAt(0)?.toUpperCase() + word.slice(1).toLowerCase());
    }
  }
  return result.join(' ');
};

console.log(capitalizeTitle('hello there of me'));
