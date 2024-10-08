function parseMatrix(matrixStr) {
    return matrixStr.split(';').map(row => row.split(',').map(Number));
}

function formatMatrix(matrix) {
    return matrix.map(row => row.join(',')).join('\n');
}

function addMatrices() {
    const matrixA = parseMatrix(document.getElementById('matrixA').value);
    const matrixB = parseMatrix(document.getElementById('matrixB').value);
    const result = [];

    // Check if dimensions match
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        document.getElementById('result').textContent = 'Error: Matrices must have the same dimensions!';
        return;
    }

    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }

    document.getElementById('result').textContent = formatMatrix(result);
}

// Event listener for the button
document.getElementById('addButton').addEventListener('click', addMatrices);
