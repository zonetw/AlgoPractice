// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// straight forward solution
function steps1(n) {
  if (!isNaN(n)) {
    let tmpResult;

    for (let i = 0; i < n; i++) {
      tmpResult = "";
      for (let j = 0; j < n; j++) {
        if (j <= i) {
          tmpResult += "#";
        } else {
          tmpResult += " ";
        }
      }

      console.log(tmpResult);
    }
  }
}

// recursive version
function steps2(n, row = 0, tmpResult = "") {
  if (row !== n) {
    if (tmpResult.length === n) {
      console.log(tmpResult);
      steps2(n, row + 1);
    } else {
      if (tmpResult.length <= row) {
        tmpResult += "#";
      } else {
        tmpResult += " ";
      }
      steps2(n, row, tmpResult);
    }
  }
}

module.exports = steps2;
