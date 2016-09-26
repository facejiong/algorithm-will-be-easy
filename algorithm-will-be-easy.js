'use strict';

class Search {
  // 线性查找 
  // O(N)
  linearSearch(array, x) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      if (array[i] === x) {
        return i;
      }
    }
    return false;
  }
  // 二分查找
  // O(logN)
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
class Sort {

  // 冒泡排序
  // O(n^2)
  bubbleSort(array) {
    var d = '';
    var length = array.length;
    for (var i=0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (array[i] < array[j]) {
                d = array[j];
                array[j] = array[i];
                array[i] = d;
            }
        }
    }
    console.dir(array)
    return array;
  }
}
 

module.exports = {
  Search: Search,
  Sort: Sort,
};