// 成员无序，互斥
function Set() {
	this.dataStore = [],
	this.add = add;
	this.remove = remove;
	this.size = size;
  this.contains = contains;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}
// 并集
function union(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]);
  }
  for (var i = 0; i < set.dataStore.length; ++i) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}
// 交集
function intersect(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i])
    }
  }
  return tempSet;
}
function size() {
  return this.dataStore.length;
}
// 子集
function subset(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    this.dataStore.forEach(function(member) {
      if (!set.contains(member)) {
        return false;
      }
    })
  }
  return true;
}
// 补集
function difference(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
var names = new Set();
names.add('a');
names.add('b');
names.add('c');
names.add('d');
names.add('e');
console.log(names.show());
console.log('add :' + names.add('a'));
console.log('add :' + names.add('f'));
console.log(names.show());
names.remove('b');
console.log(names.show());

var age = new Set();
age.add('1');
age.add('2');
age.add('4');
age.add('a');

var name = new Set();
name.add('a')
var unionPeople = new Set();
unionPeople = names.union(age);
console.log(unionPeople.show());
var inter = names.intersect(age);
console.log(inter.show());
console.log(names.subset(age))
console.log(name.subset(names))
var diff = names.difference(age);
console.log(diff.show());
