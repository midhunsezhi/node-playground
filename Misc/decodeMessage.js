var puzzle = [
    ['I', 'X', 'X', 'X', 'K', 'X', 'X'],
    ['X', 'R', 'X', 'C', 'X', 'E', 'X'],
    ['X', 'X', 'O', 'X', 'X', 'X', 'D']
];
var singleColumn = [
    ['I'],
    ['X']
]

var singleRow = [['I', 'X']]

function decodeMessage(grid) {
    var arr = Array.isArray(grid) ? grid : null,
        y = arr && arr.length,
        x = y && arr[0].length,
        secret = '',
        i = 0,
        j = 0,
        bIncrement = true;

        if (!x) {
            return;
        }

        if (y === 1) {
            return arr[0][0];
        }

        while(i < x) {
            secret += arr[j][i++];
            bIncrement ? j++ : j--;
            if (j === 0 || j === y-1) {
                bIncrement = !bIncrement;
            }
        }

        return secret;
}

console.log(decodeMessage(puzzle));
console.log(decodeMessage(singleColumn));
console.log(decodeMessage(singleRow));