//Question 1
function myReverse(str) {
  // your code here
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed += str[length - i - 1];
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
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
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
