//solution 1
function capitalize(str) {
  let wordsArr = str.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return wordsArr.join(" ");
}

module.exports = capitalize;
