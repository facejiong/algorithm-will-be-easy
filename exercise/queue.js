function Queue(argument) {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element)
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log(q.dataStore);
q.dequeue();
console.log(q.dataStore);
console.log(q.back());
console.log(q.front())

// 基数排序
// 1、按个位上数字排序，存入队列
// 2、将上述排序结果，按十位数字排序，存入队列
// 3、 。。。
// 4、

// digit 个位/十位
function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; ++i) {
    if (digit == 1) {
      queues[nums[i]%10].enqueue(nums);
    } else {
      queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

var queues = []
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log(nums);
// console.log(queues);
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log(nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log(nums);


//优先队列
// function dequeue() {
//   var priority = this.dataStore[0].code;
//   for (var i = 1; i < this.dataStore.length; ++i) {
//     if (this.dataStore[i].code < priority) {
//       priority = i;
//     }
//   }
//   return this.dataStore.splice(priority,1);
// }
