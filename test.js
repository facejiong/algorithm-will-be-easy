'use strict';

var assert = require('assert');
var AlgorithmWillBeEasy = require('./algorithm-will-be-easy');


(function() {
  var list = new AlgorithmWillBeEasy.List();

  list.push(1);
  list.unshift(2);

  assert.equal(list.get(1), 1);
  assert.equal(list.get(0), 2);

  assert.equal(list.shift(), 2);
  assert.equal(list.get(0), 1);

  assert.equal(list.pop(), 1);
  assert.equal(list.get(0), undefined);
}());