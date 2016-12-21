var prompt = require('prompt');
prompt.start();

function linearSearch(num, items) {
  var len = items.length;
  var n = num;

  //Loop until i is less than array length and queried number
  for(i=0; i < len && i < n; i++){
    if (n == items[i]){
      console.log("Found " + num);
    }else {
      console.log("Did not find " + num);
    }
  }
}

var a = [1,2,3,4,5,6,7,8,9,0];

prompt.get(['num'], function(err, result) {
  linearSearch(result.num, a);
});
