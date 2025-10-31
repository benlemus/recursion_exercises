function balancedBrackets(val, index = 0, arr = []) {
  if (index === val.length) return arr.length === 0;
  const pairs = { "(": ")", "{": "}", "[": "]" };

  const char = val[index];
  if (pairs[char]) {
    return balancedBrackets(val, index + 1, [pairs[char], ...arr]);
  }

  //   if (char in { ")": 1, "}": 1, "]": 1 }) {
  if (")}]".includes(char)) {
    if (arr.length === 0 || arr[0] !== char) return false;
    return balancedBrackets(val, index + 1, arr.slice(1));
  }

  return false;
}

console.log(balancedBrackets("()"));
console.log(balancedBrackets("([{}])"));
console.log(balancedBrackets("([)]"));
console.log(balancedBrackets("{[(]}"));
