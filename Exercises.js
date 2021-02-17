//Question 1
function myReverse(str) {
  // your code here
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - i - 1];
  }
  return reversed;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.substring(i, j));
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  if (str === "")
    return str; // no point in working with empty string.

  // first replace the first letter of the sentence without space before it.
  // this will only replace the first letter because the use of a value and not a literal String.
  str = str.replace(str[0], str[0].toUpperCase());

  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      i++
      str = str.replace(" " + str[i], " " + str[i].toUpperCase());
    }
  }
  return str;
}

//Question 4
function myPower(x, n) {
  // your code here
  return Math.pow(x, n);
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  if (str === "")
    return "The String is empty and there are no repeats.";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
      return str[i];
  }
  /**
    // more efficient way to write this
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr[i] = false;
    }
  
    let foundDuplicate = false;
    let i = 0;
    while (i < str.length - 1) {
      for (let j = i + 1; j < str.length; j++) {
        //look for duplicates of str[i], mark them 'true' if any are found
        if (str[i] === str[j]) {
          arr[j] = true;
          foundDuplicate = true;
        }
      }
      if (!foundDuplicate) { // no duplicate for str[i]
        return str[i];
      }
      // duplicates were found, prepare for next loop execution. 
      arr[i] = true;
      foundDuplicate = false;
      while (arr[i])//move i to the next letter that was not already inspected.
        i++;
    }
*/
  return "All characters are repeated.";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here 
  let sum = 1;
  for (let i = 2; i <= num / i; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i)
        sum += num / i;
    }
  }
  if (sum === num)
    return true;
  return false;

}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
