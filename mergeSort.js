function mergeArrays(left, right) {
  var result = [];
  il = 0;
  ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    }else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  //Get the middle of the array and split it in half.
  var middle = Math.floor(items.length / 2),
      left = items.slice(0, middle),
      right = items.slice(middle),
      params = mergeArrays(mergeSort(left), mergeSort(right)); //Store new merged array here

  console.log("left " + left);
  console.log("right " + right);

  params.unshift(0, items.length);
  items.splice.apply(items, params); //Replace items array values with params array values
  return items;
}

a = [9, 3, 5, 7, 2, 1, 4];
mergeSort(a);
console.log(a);
