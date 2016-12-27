'use strict';

var assert = require('assert');
var AlgorithmWillBeEasy = require('./algorithm-will-be-easy');
var randomData = []
for(var i = 0; i <= 100; i++){
	randomData.push(Math.floor(Math.random()*100))
}

(function() {
  var Sort = new AlgorithmWillBeEasy.Sort();
  console.time("bubbleSort");
  Sort.bubbleSort(randomData)
  // console.dir(Sort.bubbleSort(randomData))
  console.timeEnd("bubbleSort");
  console.time("selectionSort");
  Sort.selectionSort(randomData)
  // console.dir(Sort.selectionSort(randomData))
  console.timeEnd("selectionSort");
  console.time("insertionSort");
  Sort.insertionSort(randomData)
  // console.dir(Sort.insertionSort(randomData))
  console.timeEnd("insertionSort");
}());