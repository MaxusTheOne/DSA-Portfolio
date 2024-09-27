import Grid from "./grid.js";
// Tests
const grid = new Grid(3, 3);
console.log("rows: ",grid.rows);
console.log("cols: ",grid.cols);
grid.set(0, 0, 'A');
grid.set(0, 1, 'B');
grid.set(0, 2, 'C');
grid.set(1, 1, 'C');
console.log(grid.get({row: 0,col: 0})); // 'A'
console.log(grid.get(0, 1)); // 'B'
console.log(grid.indexFor(0, 1)); // 1
console.log(grid.indexFor(2, 2)); // 2*3 + 2 = 8
console.log(grid.rowColFor(4)); // { row: 1, col: 1 }
console.log(grid.rowColFor(8)); // { row: 2, col: 2 }
console.log(grid.neighbours(1, 1)); // [ 8 Objects ]
console.log(grid.neighbours(2, 2)); // [ 3 Objects ]
console.log(grid.dump()); 


console.log(grid.neighbourValues(1, 1)); // [ 'B', null, null, null ]
// console.log(grid.nextInRow(0, 1)); // { row: 0, col: 2, value: 'C' }
console.log(grid.nextInCol(0, 1)); // { row: 1, col: 1, value: C }
// console.log(grid.north(1, 1)); // { row: 0, col: 1, value: 'B' }
// console.log(grid.south(1, 1)); // { row: 2, col: 1, value: null }
// console.log(grid.west(1, 1)); // { row: 1, col: 0, value: null }
// console.log(grid.east(1, 1)); // { row: 1, col: 2, value: null }
// console.log(grid.rows()); // 3
// console.log(grid.cols()); // 3
// console.log(grid.size()); // 9
// grid.fill('X');
// console.log(grid.get(0, 0)); // 'X'