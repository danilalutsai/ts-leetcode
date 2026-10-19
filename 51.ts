// https://leetcode.com/problems/count-of-matches-in-tournament/

function numberOfMatches(n: number): number {
  let matchesPlayed = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      matchesPlayed += n / 2;
      n = n / 2;
    } else if (n % 2 !== 0) {
      matchesPlayed += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  
  return matchesPlayed;
};


console.log(numberOfMatches(14));
