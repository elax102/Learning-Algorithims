//Copyright 2009 Nicholas C. Zakas. All rights reserved.
//MIT-Licensed, see source file
var prompt = require('prompt');
prompt.start();


function binarySearch(items, value) {
  'use strict';

  var startIndex = 0;
  var stopIndex = items.length - 1;
  var middle = Math.floor((stopIndex + startIndex)/2);

  console.log("Starting with " + items + " and looking for " + value);
  console.log("Middle of list starts at " + middle);

  while (items[middle] != value && startIndex < stopIndex) {
    //adjust search area
    console.log("Comparing " + value + " to " + items[middle]);
    if (value < items[middle]) {
      stopIndex = middle -1;
      console.log("Value is lesser. Moving end to " + stopIndex);
      console.log("Moving array from " + startIndex + " to " + stopIndex);
    }else if (value > items[middle]) {
      startIndex = middle +1;
      console.log("Value is greater. Moving beginning to " + startIndex);
      console.log("Moving array from " + startIndex + " to " + stopIndex);
    }

    //recalcualate middle
    middle = (stopIndex + startIndex)/2 |0;
    console.log("Middle is now " + middle);
  }

  //make sure it's the right value
  console.log("Result " + ((items[middle] != value) ? -1 : middle));
  return (items[middle] != value) ? -1 : middle;
}

var a = [1,2,3,4,5,6,7,8,9];

prompt.get(['num'], function(err, result) {
  binarySearch(a, result.num);
});
