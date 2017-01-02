// 动态规划：解决问题自底部到顶部
// 递归：自顶部到底部

function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n -2);
  }
}

var start = new Date().getTime();
console.log(recurFib(30))
var stop = new Date().getTime();
console.log(stop - start)
//许多中间值被重复计算，而动态规划把中间值存储起来，方便访问

function dynFib(n) {
  var val = [];
  for (var i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  }
}

var start1 = new Date().getTime();
console.log(dynFib(30))
var stop1 = new Date().getTime();
console.log(stop1 - start1)

function iterFb(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}
