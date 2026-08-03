function commonCharsSet(words: string[]): string[] {
  const result: string[] = [];
  const arr: Set<string>[] = [];

  for (const word of words) {
    const set = new Set<string>();

    for (const char of word) {
      set.add(char);
    }
    arr.push(set);
  }

  for (const char of arr[0]) {
    let ok = true;

    for (const s of arr) {
      if (!s.has(char)) {
        ok = false;
        break
      }
    }

    if (ok) {
      result.push(char);
    }
  }
  return result
}

console.log(commonCharsSet(["bella","label","roller"]));

