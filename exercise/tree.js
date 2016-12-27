// 二叉树查找，增加，删除快
function  Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.update = update;
  this.remove = remove;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// 中序遍历
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
}

// 先序遍历
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + ' ');
    inOrder(node.left);
    inOrder(node.right);
  }
}

// 后序遍历
function postOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.show() + ' ');
  }
}
// left
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}
// right
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    if (node.left == null && node.right == null) {
      return null;
    }
    if (node.left == null) {
      return node.right;
    }
    if (node.right == null) {
      return node.left;
    }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

function getSmallest(root) {
  var current = root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function update(data) {
  var grade = this.find(data);
  grade.count ++;
  return grade;
}
var nums = new BST();
nums.insert(2);
nums.insert(22);
nums.insert(21);
nums.insert(12);
nums.insert(27);
nums.insert(5);
nums.insert(37);
nums.insert(8);
nums.insert(4);
console.log('中序')
inOrder(nums.root)
console.log('先序')
preOrder(nums.root)
console.log('后序')
postOrder(nums.root)
console.log('min=' + nums.getMin())
console.log('max=' + nums.getMax())
console.log('find:' + nums.find(2).data)
// add节点 count
nums.update(2);
nums.update(2);
console.log('count:' + nums.find(2).count)

nums.remove(12);
console.log('中序')
inOrder(nums.root)

