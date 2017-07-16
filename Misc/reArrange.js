var input = ['A','B','C','D','E','F', 'G']; // op = ['C', 'A', 'G', 'F', 'D', 'E', 'B']
var indices = [2,0,6,5,3,4,1];

function mutate (arr, ind) {
    var len = arr.length,
        current, i, j, k;
    for (i = 0; i < len; i++) {
        current = arr[i];
        j = i;
        while (true) {
            k = ind[j];
            ind[j] = j;
            if(k === i) {
                break;
            }
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = current;
    }
    console.log(arr);
    console.log(ind);
    return arr;
}

mutate(input, indices);

