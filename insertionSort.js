function inserstionSort(items) {
  var len = items.length,
      value,
      i,
      j;

  for(i=0; i < len; i++){
    for(j=i-1; j > -1 && items[j] > value; j--){
      items[j+i] = items[j];
    }
    items[j+i] = value;
  }
  return items;
}
