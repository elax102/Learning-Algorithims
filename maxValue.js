function findMax(items) {
  maxValue = items[0];
  minValue = items[0];

  console.log("Finding min and max values in " + items);

  for(var i = 1; i != items.length; i++){
    console.log("Looking at " + items[i]);
      if (items[i] > maxValue) {
        maxValue = items[i];
        console.log("Max is now " + maxValue);
      }else if (items[i] < minValue) {
        minValue = items[i];
        console.log("Min is now " + minValue);
      }
  }
  
  console.log("Min is " + minValue);
  console.log("Max is " + maxValue);
  return [minValue, maxValue];
}

a = [5,3,4,6,8,9,5,3,1];
findMax(a);
