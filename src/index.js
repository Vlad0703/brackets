module.exports = function check(str, bracketsConfig) {
  let same;
  for (let el in bracketsConfig) {
    if (bracketsConfig[el][0] === bracketsConfig[el][1]) {
      same = bracketsConfig[el][0]
    }
  }
  let n = 1;
  let brackets = bracketsConfig.flat().join('');
  let stack = [];
  for (let bracket of str) {
    let bracketIndex = brackets.indexOf(bracket);
    if (bracketIndex % 2 === 0) {
      if (bracket === same && n === 1){
        stack.push(bracketIndex + 1);
        n = n*(-1);
        
      } else if ((bracket === same && n === -1)){
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
