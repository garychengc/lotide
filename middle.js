const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) return [];
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) return arr.slice(mid, mid + 1);
  if (arr.length % 2 === 0) return arr.slice(mid - 1, mid + 1);
};
module.exports = middle;
