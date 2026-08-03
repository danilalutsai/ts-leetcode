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

// Explanation
// Analogy: each word is a kid. Each letter is a sticker that kid owns.
//
// "bella" = kid who owns stickers b, e, l, a.
// Question: which stickers do all kids own?
// Two jobs. Job 1: find out what each kid owns. Job 2: compare the bags.

// ---
// Part 1 — two empty boxes
// const result: string[] = [];
// const arr: Set<string>[] = [];

// arr = shelf holding every kid's sticker bag. Empty now, fills up in job 1.
// result = the answer list. Empty now, fills up in job 2.
// Types read right-to-left. Set<string>[] = array, of sets, of strings. string[] = array of strings.
// Both const even though they grow — const locks the box, not the contents. You can put things in. You just can't swap the box for a different one.

// ---
// Part 2 — build one bag per kid
//
// for (const word of words) {        // A
//   const set = new Set<string>();   // B
//
//   for (const char of word) {       // C
//     set.add(char);                 // D
//   }
//   arr.push(set);                   // E
// }
//
// Line A — walk kids one at a time. word = current kid. Runs 3 times: "bella", "label", "roller".
// Line B — new empty bag. Inside the loop, so each kid gets their own bag. This is why the earlier bug happened: put it outside and all kids share one bag, everything mixes.
// Line C — walk that kid's letters one at a time. A string is a list of characters, so for...of hands them over one by one. char = one single letter.
// Line D — drop the letter in the bag.
// Why Set and not array? Set refuses duplicates. "bella" has two l. Bag ends with {b, e, l, a} — the second l is silently ignored. That's what you want here: "does this kid own an l?" is yes/no, count doesn't matter.
// Line E — inner loop finished, bag full. Put it on the shelf.
// Placement of E matters. Inside the inner loop = you'd shelve the bag 5 times, half-empty each time. After the inner loop, still inside the outer = shelve once, complete.

// After all 3 rounds:
// arr = [ {b,e,l,a}, {l,a,b,e}, {r,o,l,e} ]

// ---
// Part 3 — pick who to test
// for (const char of arr[0]) {
// arr[0] = first kid's bag = {b, e, l, a}.
// Why only that bag? A sticker owned by everyone must also be owned by kid 1. So kid 1's bag is the complete list of possibilities. r from roller can be ignored instantly — kid 1 doesn't have it, so it can't be universal.
// That's 4 candidates to test: b, e, l, a.

// ---
// Part 4 — test one candidate
//
// let ok = true;                  // F
//
// for (const s of arr) {          // G
//   if (!s.has(char)) {           // H
//     ok = false;                 // I
//     break                       // J
//   }
// }

// This is the flag pattern. Three beats: assume good, look for proof it's bad, check the verdict.
// Line F — assume innocent. let because it must be changeable; const would block line I. Declared inside the candidate loop, so it resets to true for each new letter. Outside, and one bad letter would poison every letter after it.
// Line G — walk all 3 bags. s = one bag.
// Line H — s.has(char) asks "is this letter in this bag?" → true/false. The ! flips it. So the if fires only when the bag is missing the letter.
// Set's has is instant, no matter how big the bag. That's the whole point of Set.
// Line I — one bag missing it is enough. Disqualified.
// Line J — stop early. Verdict already known, checking the rest is wasted work.

// ---
// Part 5 — read the verdict
//
// if (ok) {
//   result.push(char);
// }
//
// Comes after the inner loop closes. Only then is ok final.
// Put this inside the inner loop instead and it fires per-bag — you'd push the same letter 3 times, and you'd push before all bags were checked.
// Rule: let ok = true at the top, loop in the middle, if (ok) at the bottom. Miss the bottom and the flag is pointless.
