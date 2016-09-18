'use strict';

class Search {

  linearSearch(array, x) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      if (array[i] === x) {
        return i;
      }
    }
    return false;
  }

  binarySearch(array, x) {
    var low = 0, high = array.length - 1;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      if (x == array[mid]) {
        return mid;
      }
      if (x < array[mid]) {
        high = mid - 1;
      }
      else {
        low = mid + 1;
      }
    }
    return false;
  }

}
 

module.exports = {
  Search: Search,
};