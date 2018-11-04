//solution 1: split sentence into words by space and deal with them separately
function capitalize(str) {
  let wordsArr = str.split(" ").map(word => {
    if (word) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      console.log('word is ""');
      return "";
    }
  });

  return wordsArr.join(" ");
}

// solution 2: recognize words by space, but change them char by char
/*
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
*/
module.exports = capitalize;
