/**
 * Given a two-dimensional array, if any element within is zero, make its whole row and column zero.
 */

const makeZeroes = (matrix) => {
    if (!matrix || matrix.length === 0) {
        return;
    }

    let zeroRows = new Set();
    let zeroCols = new Set();

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (!zeroRows.has(i)) {
                    zeroRows.add(i);
                }
                if (!zeroCols.has(j)) {
                    zeroCols.add(j);
                }
            }
        }
    }

    for (let row of zeroRows) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    for (let col of zeroCols) {
        for (let row = 0; row < rows; row++) {
            matrix[row][col] = 0;
        }
    }
    
    return matrix;
}

const test = makeZeroes(
    [
        [5, 4, 3, 9],
        [2, 0, 7, 6],
        [1, 3, 4, 0],
        [9, 8, 3, 4]
    ]
);
console.log(test);