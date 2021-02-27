module.exports = function check(input, arr) {
  let same = {};
  for (let el in arr) {
    if (arr[el][0] === arr[el][1]) {
      same[arr[el][0]]= arr[el][0];
    }
  }
  console.log(same)
  let n = 1;
  let brackets = arr.flat().join('');
    console.log(brackets)
  let stack = [];
  for (let bracket of input) {
    let bracketIndex = brackets.indexOf(bracket);
    if (bracketIndex % 2 === 0) {
      if (bracket === same[bracket] && n === 1){
        stack.push(bracketIndex + 1);
        n = n*(-1);
        console.log(stack)
      } else if ((bracket === same[bracket] && n === -1)){
        stack.pop();
        n*= -1;
        
      } else {
        stack.push(bracketIndex + 1);
      }
    } else {
      if (stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
