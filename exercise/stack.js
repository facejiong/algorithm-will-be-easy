function Stack(argument) {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop(element) {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1]
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

var s = new Stack();
s.push('1');
s.push('2');
s.push('3');
s.push('4');
console.log(s.dataStore);
s.pop();
console.log(s.pop());
console.log(s.length());
console.log(s.peek());

//进制转换
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while(num > 0);
  var converted = '';
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
console.log(mulBase(34, 2))

// 回文
function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }

  if (word == rword) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('rerer'))
console.log(isPalindrome('rerw'))

// 递归
function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(fact(4))
