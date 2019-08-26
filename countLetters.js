const countLetters = function(string) {
  let letterObj = {};
  const str = string.split(' ').join('');
  for (let word of str) {
    if (!letterObj[word]) {
      letterObj[word] = 1;
    } else {
      letterObj[word] += 1;
    }
  }
  return letterObj;
}
module.exports = countLetters;