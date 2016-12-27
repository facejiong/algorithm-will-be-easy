function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

function find(item) {
  var currNode = this.head;
  console.log(currNode)
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove() {
  var preNode = this.findPrevious(item);
  if (!(preNode.next == null)) {
    preNode.next = preNode.next.next;
  }
}

var nums = new LList();
console.log(nums)
nums.insert('1', 'head');
nums.insert('3', '1');
nums.insert('3', '7');
nums.display();
