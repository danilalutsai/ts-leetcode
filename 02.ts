// https://leetcode.com/problems/find-common-characters/description/

function commonCharsMap(words: string[]): string[] {
  const A = 'a'.charCodeAt(0); // 97

  const counts = (word: string): number[] => {
    // .fill(0) writes a real 0 into all 26. Now every slot holds a genuine number
    const jars = new Array<number>(26);

    // Walk the word one character at a time, left to right. i is the position: 0, then 1, and so on.
    for (let i = 0; i < word.length; i++) {
      const s = word.charCodeAt(i) - A;
      jars[s] = (jars[s] ?? 0) + 1;
    }

    return jars
  };

  const running = counts(words[0] ?? '');
  console.log('running:', running);

  for (let w = 1; w < words.length; w++) {
    const current = counts(words[w] ?? '');
    console.log('current:', current);
    for (let c = 0; c < 26; c++) {
      running[c] = Math.min(running[c] ?? 0, current[c] ?? 0);
      console.log('running[c]:', running[c]);
    }
  }

  const result: string[] = [];

  for (let c = 0; c < 26; c++) {
    for (let k = 0; k < (running[c] ?? 0); k++) {
      result.push(String.fromCharCode(c + A));
    }
  }

  return result;
}

commonCharsMap(['bella', 'label', 'roller']);
