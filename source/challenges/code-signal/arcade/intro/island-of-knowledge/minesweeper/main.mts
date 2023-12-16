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

const getMinesweeperNumbers = (matrix: Array<Array<boolean>>) => {
	const result = new Array(matrix.length).fill(null)
	.map(row => new Array(matrix.at(0)?.length ?? 0).fill(null))

	for (let row = 0; row < matrix.length; row ++) {
		for (let col = 0; col < (matrix.at(0)?.length ?? 0); col ++) {
			let mines = 0

			for (let rowMod = -1; rowMod < 2; rowMod ++) {
				const adjRow = row + rowMod
				if (adjRow < 0) continue

				for (let colMod = -1; colMod < 2; colMod ++) {
					const adjCol = col + colMod
					if (adjCol < 0) continue
					else if (rowMod === 0 && colMod === 0) continue

					const hasMine = matrix.at(adjRow)?.at(adjCol)
					if (hasMine === true) mines += 1
				}
			}

			result[row][col] = mines
		}
	}

	return result
}

export default getMinesweeperNumbers
