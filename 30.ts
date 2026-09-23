// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  const modified = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  
  const modifiedStr = modified.join('');
  const reversedModifiedStr = modified.toReversed().join('');

  if (modifiedStr === reversedModifiedStr) {
    return true;
  }

  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
