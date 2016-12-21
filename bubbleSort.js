var a = [10, 4, 7, 1, 2, 8, 9];

function bubbleSort(a)
{
    console.log("Starting with " + a);
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
                console.log(a);
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log("Final " + a);
