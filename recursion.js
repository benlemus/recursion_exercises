/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, maxLen = 0) {
  if (index === words.length) {
    return maxLen;
  }

  const curLen = words[index].length;
  const newMax = curLen > maxLen ? curLen : maxLen;

  return longest(words, index + 1, newMax);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) return "";
  return str[index] + everyOther(str, index + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;

  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === val) {
    return index;
  }

  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, end = str.length - 1) {
  if (end === -1) return "";
  return str[end] + revString(str, end - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const result = [];

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] == "object") {
      result.push(...gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, index = 0) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === val) {
    return index;
  }

  return findIndex(arr, val, index + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
