// Write a function that takes a string as input and returns the length of the longest substring that contains no repeated characters.

// abcdaefb bcdaef (6)

const solution = (s: string): number => {
  // write your solution here..
  let currentStart = 0;
  let maxLength = 0;
  const charMap = new Map<string, number>();
  for (let currentEnd = 0; currentEnd < s.length; currentEnd++) {
    const char = s[currentEnd];
    if (charMap.has(char)) {
      currentStart = charMap.get(char) + 1;
    }
    charMap.set(char, currentEnd);

    const currentLength = currentEnd - currentStart + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
};
