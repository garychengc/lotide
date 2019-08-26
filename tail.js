/* tail function - return everything but the first element */
const assertEqual = require('./assertEqual');
const tail = function(arr) {
  return arr.slice(1);
};
module.exports = tail;

