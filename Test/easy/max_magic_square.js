var largestMagicSquare = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowSums = Array(m).fill('').map(_ => Array(n + 1).fill(0));
    const colSums = Array(n).fill('').map(_ => Array(m + 1).fill(0));
    const boundary = Math.min(m, n);
    const isVaild = (sum, row, col, boundary) => {
        for (let length = 0; length < boundary; length++) {
            const rowSum = rowSums[row + length][col + boundary] - rowSums[row + length][col];
            const colSum = colSums[col + length][row + boundary] - colSums[col + length][row];

            if (sum !== rowSum || sum !== colSum) return false;
        }
        return true;
    };
    const isVaildDiagonal = (sum, row, col, boundary) => {
        let diagonal1 = diagonal2 = 0;

        for (let length = 0; length < boundary; length++) {
            diagonal1 += grid[row + length][col + length];
            diagonal2 += grid[row + length][col + boundary - length - 1];
        }
        return sum === diagonal1 && sum === diagonal2;
    };

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const value = grid[row][col];

            rowSums[row][col + 1] = rowSums[row][col] + value;
            colSums[col][row + 1] = colSums[col][row] + value;
        }
    }
    for (let length = boundary; length > 1; length--) {
        for (let row = 0; row <= m - length; row++) {
            for (let col = 0; col <= n - length; col++) {
                const sum = rowSums[row][col + length] - rowSums[row][col];
                
                if (!isVaild(sum, row, col, length)) continue;
                if (isVaildDiagonal(sum, row, col, length)) return length;
            }
        }
    }
    return 1;
};