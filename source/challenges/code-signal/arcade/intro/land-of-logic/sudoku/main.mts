/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

AUTHOR: Noltron000
LICENSE: 3-Clause BSD (Attribution Required)
GITHUB: https://github.com/noltron000/coding-challenges/
CODESIGNAL: https://app.codesignal.com/profile/noltron000/

------------------------------------------------------------

Like my solutions? You can help me out in a couple of ways:
- Star my GitHub Repository & follow me on GitHub ⭐
- Upvote my solution on CodeSignal & become my CodeFriend 😄

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

import {Algebra} from "library/algebra.mts"

/**
Checks whether or not the given grid is a valid sudoku solution.
**/
const isSudokuSolution = (grid: Array<Array<number>>) => {
	const cols = transpose(grid)

	const sqrs: Array<Array<number>> = [ ]
	for (let squareIndex = 0; squareIndex < grid.length; squareIndex += 3) {
		const sqr: Array<number> = [ ]
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				sqr.push(grid[squareIndex + i][squareIndex + j])
			}
		}
		sqrs.push(sqr)
	}

	// This is kind of a hacky way to make sure the numbers 1-through-9 each appear...
	const product = Algebra.factorialize(9)
	const rowsOK = grid.every(row => row.reduce(Algebra.multiplication) === product)
	const colsOK = cols.every(col => col.reduce(Algebra.multiplication) === product)
	const sqrsOK = sqrs.every(sqr => sqr.reduce(Algebra.multiplication) === product)

	return rowsOK && colsOK && sqrsOK
}

/**
Transposes a 2D-matrix.
**/
const transpose = <T = unknown,> (grid: Array<Array<T>>) => {
	const rowLength= grid.length
	const columnLength = grid.at(0)?.length ?? 0

	const transposed: Array<Array<T>> = new Array(columnLength).fill(null)
	.map(row => new Array(rowLength).fill(null))

	grid.forEach((row, rowIndex) => {
		row.forEach((cell, columnIndex) => {
			transposed[columnIndex][rowIndex] = grid[rowIndex][columnIndex]
		})
	})

	return transposed
}

export default isSudokuSolution
