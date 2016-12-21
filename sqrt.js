var prompt = require('prompt');

prompt.start();

function sqrt(a, error) {
  x = a;
  while ((x - a/x) > error) {
    x = (x + a/x)/2;
  }
  return(x);
}

prompt.get(['num', 'accuracy'], function(err, result) {
  console.log('Square root of ' + result.num + ' is ' + sqrt(result.num, result.accuracy));
});
