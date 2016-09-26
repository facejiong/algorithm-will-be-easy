'use strict';

var assert = require('assert');
var AlgorithmWillBeEasy = require('./algorithm-will-be-easy');
var randomData = []
for(var i = 0; i <= 1000; i++){
	randomData.push(Math.floor(Math.random()*1000))
}
function calculationTime(func, string){
	console.time("rf-time");
	console.dir(func)
	func()
	console.timeEnd("rf-time");
}
// console.dir(randomData)
(function() {
  var Search = new AlgorithmWillBeEasy.Search();
  assert.equal(Search.linearSearch([1,2,3,5,6,8,9,12],5), 3, 'linearSearch is error');
  assert.equal(Search.binarySearch([1,2,3,5,6,8,9,12],6), 4, 'binarySearch is error');
}());

(function() {
  var Sort = new AlgorithmWillBeEasy.Sort();
  Sort.bubbleSort(randomData)
  calculationTime(Sort.bubbleSort(randomData), 'ss')
  // assert.equal(Sort.bubbleSort([4, 8, 7, 1, 2, 3, 6, 5, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'bubbleSort is error');
  // assert.equal(Sort.binarySearch([1,2,3,5,6,8,9,12],6), 4, 'binarySearch is ok');
}());