// 顺序查找：适合元素随机排列的列表
// 二分查找：适合元素已排列的列表

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

function findMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
console.log('线性查找：')
console.log(findMin(nums));
console.log(findMax(nums));
console.log(seqSearch(nums, 44))

// 自组织，通过将频繁查找到的元素置于数据集的起始位置来最小化查找次数

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    // 当数据位于数据集前20%之外时，才需要被重新移动到起始位置
    if (arr[i] == data && i > (arr.length * 0.2)) {
      swap(arr, i, 0);
      return true;
    } else if (arr[i] == data) {
      return true
    }
  }
  return false;
}

function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}


function binSearch(arr, data) {
  var upper = arr.length - 1;
  var lower = 0;
  while (lower <= upper) {
    var mid = Math.floor((upper + lower) / 2);
    if (arr[mid] < data) {
      lower = mid + 1;
    } else if (arr[mid] > data) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var binArr = [1, 2, 4, 6, 7, 10, 11, 13, 15, 18]
console.log('二分查找：')
console.log(binSearch(binArr, 7))
