'use strict';

var assert = require('assert');
var AlgorithmWillBeEasy = require('./algorithm-will-be-easy');

(function() {
  var Search = new AlgorithmWillBeEasy.Search();
  assert.equal(Search.linearSearch([1,2,3,5,6,8,9,12],5), 3, 'linearSearch is ok');
  assert.equal(Search.binarySearch([1,2,3,5,6,8,9,12],6), 4, 'binarySearch is ok');
}());