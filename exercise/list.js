function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // 初始化一个空数组来保存列表元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(el) {
  this.dataStore[this.listSize++] = el;
}

function find(el) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] = el) {
      return i;
    }
  }
  return -1;
}

function remove(el) {
  var findEl = this.find(el);
  if (foundEl > -1) {
    this.dataStore.splice(foundEl, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

function insert(el, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, el);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(el) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == el) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    -- this.pos;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++ this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

var names = new List();
names.append('li');
names.append('wan');
names.append('liu');
names.append('zhang');
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());
names.moveTo(3);
console.log(names.getElement());

for(names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
