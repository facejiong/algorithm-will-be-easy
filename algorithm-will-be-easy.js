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

/*
 *     Name           平均时间复杂度      最好           最坏           空间复杂度    稳定性  排序方式
 *     ------------------------------------------------------------------------------------------------
 *     冒泡排序       O(n^2)              O(n)           O(n^2)         O(1)          YES     内
 *     选择排序       O(n^2)              O(n^2)         O(n^2)         O(1)          NO      内
 *     插入排序       O(n^2)              O(n)           O(n^2)         O(1)          YES     内
 *     希尔排序       O(n log n)          O(n(log n)^2)  O(n(log n)^2)  O(1)          NO      内
 *     归并排序       O(n log n)          O(n log n)     O(n log n)     O(n)          YES     外
 *     快速排序       O(n log n)          O(n log n)     O(n ^ 2)       O(log n)      NO      内
 *     堆排序         O(n log n)          O(n log n)     O(n log n)     O(1)          NO      内
 *     计数排序       O(n + k)            O(n + k)       O(n + k)       O(k)          YES     外
 *     桶排序         O(n + k)            O(n + k)       O(n + k)       O(n + k)      YES     外
 *     基数排序O(N!)  O(n * k)            O(n * k)       O(n * k)       O(n + k)      YES     外
 *
 */ 

class Sort {
  // 冒泡排序
  bubbleSort(array) {
    var length = array.length;
    for(var i = 0; i < length-1; i++) {
      for(var j = 0; j < length - 1 - i; j++) {
        if(array[j] > array[j+1]) {       
          var temp = array[j+1];        
          array[j+1] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }
  // 选择排序
  selectionSort(array) {
    var length = array.length;
    for (var i=0; i < length-1; i++) {
      for (var j = i + 1; j < length-1; j++) {
        if (array[i] > array[j]) {
          var temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  // 插入排序
  insertionSort(array) {
    var length = array.length
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      var j = i - 1;
      while(j >= 0 && array[j] > temp) {
        array[j+1] = array[j];
        j--;
      }
      array[j+1] = temp;
    }
    return array;
  }
  // 希尔排序 优先比较距离较远元素的插入排序,可动态定义间隔
  shellSort(array) {
    var length = array.length,
        temp,
        gap = 1;
    while(gap < len/5) {          //动态定义间隔序列
      gap = gap*5+1;

    }

    for(gap; gap > 0; gap = Math.floor(gap/5)) {
      for(var i = gap; i < len; i++) {
        temp = arr[i];
        for(var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
          arr[j+gap] = arr[j];
        }
        arr[j+gap] = temp;
      }
    }
    return array;
  }
  // 归并排序 分治法  2-路归并
  mergeSort(array) {  //采用自上而下的递归方法
    var length = arr.length;
    if(length < 2) {
      return array;
    }
    var middle = Math.floor(length / 2),
        left = array.slice(0, middle),
        right = arr.slice(middle);
        return
        merge(mergeSort(left),
        mergeSort(right));
  }
  merge(left, right){
    var result = [];
    while (left.length && right.length) {
      if(left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while(left.length)
      result.push(left.shift());
    while
      (right.length)
      result.push(right.shift());
    return result;
  }

}

 

module.exports = {
  Search: Search,
  Sort: Sort,
};