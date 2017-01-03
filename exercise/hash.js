// 散列：插入，删除，取用速度快，查找速度慢
// 散列函数：将键映射为存储地址
// 碰撞：两个键映射成同一个值

function HashTable() {
  // 数组长度为质数
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

// 除留余数法： 键是整型，以数组长度对键取余


function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length;
}

function betterHash(string, arr) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    // 霍纳算法
    total += H * total + string.charCodeAt(i)
  }
  total = total % arr.length;
  return parseInt(total);
}

function put(data) {
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

function get() {
  return this.table[this.betterHash(key)];
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ':' + this.table[i]);
    }
  }
}

var hTable = new HashTable();
var names = ['li', 'wang', 'zhang', 'huang', 'jin'];
names.map((n) => {
  hTable.put(n)
})
hTable.showDistro();
