// solution 1
// function anagrams(stringA, stringB) {
//   function formatString(str) {
//     let map = str.replace(/[^\w]/g, '')
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//     console.log(map);
//     return map;
//   }

//   return formatString(stringA) === formatString(stringB);
// };

// solution 2
function anagrams(stringA, stringB) {
  const buildCharMap = function(str) {
    str = str.replace(/[^\w]/g).toLowerCase();
    let map = {};
    for (let char of str) {
      map[char] = map[char] || 0;
      map[char]++;
    }
    return map;
  };

  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  } else {
    for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = anagrams;
