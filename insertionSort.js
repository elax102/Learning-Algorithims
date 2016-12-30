function insertionSort(items) {
    console.log("Sorting " + items);

    var len = items.length;

    for(i=1; i < len; i++){
        current = items[i];
        pos = i-1;

        while (pos >= 0 && current < items[pos]) {
            console.log("current " + current + ", items[pos] " + items[pos]);
            items[pos+1] = items[pos];
            pos = pos - 1;
            console.log("pos is now " + pos);
            console.log(items);
        }

        items[pos+1] = current;
        console.log(items);
    }
}

a = [7,2,9,6,5,4,1,3];
insertionSort(a);
