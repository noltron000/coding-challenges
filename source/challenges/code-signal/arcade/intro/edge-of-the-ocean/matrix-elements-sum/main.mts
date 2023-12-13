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
This function serves two main purposes:
1. It generates a new matrix from the given one.
	If a cell has the value of `0`, then cells below it become `0`.
2. Then, it sums up all values in the matrix, and returns it.
**/
const findHauntedRooms = (roomMatrix: Array<Array<number>>) => {
	let height = roomMatrix.length
	let width = roomMatrix[0].length

	// Initialize costMatrix
	const costMatrix = new Array(height).fill(null)
		.map((row) => new Array(width).fill(null))

	// Enter values now
	let h = 0
	let w = 0

	while (h < height) {
		while (w < width) {
			// Room was already checked for valid housing.
			if (costMatrix[h][w] != null) {/* skip */}

			// Room is valid housing, mark it.
			else if (roomMatrix[h][w] !== 0) {
				costMatrix[h][w] = roomMatrix[h][w]
			}

			// Room can't be used -- its haunted!
			else {
				// Mark this cell, and ones below it.
				let below = 0
				while (h + below < height) {
					costMatrix[h + below][w] = 0
					below ++
				}
			}

			// Increment width iterator
			w ++
		}

		// Increment height & reset width
		w = 0
		h ++
	}

	// Reset height iterator
	h = 0

	// Flatten the array and sum the contents up.
	return costMatrix.flat( ).reduce(Algebra.addition)
}

export default findHauntedRooms
