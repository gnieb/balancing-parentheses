function balancingParentheses(string) {
 
  let openP = string.split("").filter(x =>  x == ')')
  let closedP = string.split("").filter(x => x == '(')
  let needed = Math.abs(openP.length - closedP.length)
  
   if (string[string.length -1] == '(' && string[0] == ')') {
    needed += 2
  } else if (string[0] == ')' && needed == 0) {
    needed += 1
  } else if (string[string.length -1] == '(' && needed == 0) {
    needed += 1
  } 
    
  return needed
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// well. if there are only parentheses, don't worry about other characters.
// 

// the return must be the number of parentheses need to make it balanced. 
// is this JUSt asking if there are thr same number of '(' and ')'??
//try that solution 

// what if it begins with a ) and ends with a ( then they'd be equal technically?? 
