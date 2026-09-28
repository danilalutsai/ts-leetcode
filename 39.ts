// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/

function maxFreqSum(str: string): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'a', 'a' ]);
  console.log(vowels);

  const counts = new Map<string, number>();

  for (const letter of str) {
    counts.set(letter, (counts.get(letter) ?? 0) + 1);
    console.log(counts);
  }

  let maxVowel = 0;
  let maxConsonant = 0;

  for (const [letter, count] of counts) {
    if (vowels.has(letter)) {
      maxVowel = Math.max(maxVowel, count);
    } else {
      maxConsonant = Math.max(maxConsonant, count);
    }
  }

  return maxVowel + maxConsonant;
};

class Car {
  constructor(name: string, surname: string) {
    
  }
}

maxFreqSum('avsaaab');
