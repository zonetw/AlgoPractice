// iterative version
function pyramid1(n) {
  if (!isNaN(n)) {
    let totalCharsPerRow = 2 * n - 1;
    let stairs;
    let midpointIndex = n - 1;
    for (let i = 0; i < n; i++) {
      stairs = "";
      for (let j = 0; j < totalCharsPerRow; j++) {
        if (j < midpointIndex - i || j > midpointIndex + i) {
          stairs += " ";
        } else {
          stairs += "#";
        }
      }
      console.log(stairs);
    }
  }
}

// recursive version
function pyramid2(n, row = 0, tmpResult = "") {
  let totalCharsPerRow = 2 * n - 1;
  let midPointIndex = n - 1;
  let currentIndex = tmpResult.length;

  if (row !== n) {
    if (currentIndex !== totalCharsPerRow) {
      let addStr;
      if (
        currentIndex < midPointIndex - row ||
        currentIndex > midPointIndex + row
      ) {
        addStr = " ";
      } else {
        addStr = "#";
      }

      pyramid2(n, row, tmpResult + addStr);
    } else {
      console.log(tmpResult);
      pyramid2(n, row + 1);
    }
  }
}

module.exports = pyramid2;
