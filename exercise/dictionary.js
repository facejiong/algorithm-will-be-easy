// 字典 key-value对

function Dictionary(argument) {
  // js中数组是对象
  this.dataStore = new Object();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key, value) {
  this.dataStore[key] = value;
}

function find(key) {
  return this.dataStore[key];
}

function remove(key) {
  delete this.dataStore[key];
}

function showAll() {
  console.log(this.dataStore)
}
function count() {
  var n = 0;
  for (var key in Object.keys(this.dataStore)) {
    ++n;
  }
  return n;
}
function clear() {
  this.dataStore = new Object();
}
var people = new Dictionary();
people.add('name', 'li');
people.add('age', '11');
people.add('sex', 'men');
console.log(people.find('name'))
people.showAll();
console.log(people.count())
people.clear();
people.showAll();
