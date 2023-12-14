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

type Coordinates = [number, number]
const GRID_LENGTH = 8

/**
Converts a board coordinates string to an array.
**/
const getPosFromString = (cellString: string): Coordinates => {
	const [col, row] = cellString.toLowerCase( ).split("")

	const x = col.charCodeAt(0) - "a".charCodeAt(0)
	const y = parseInt(row) - 1

	return [x, y]
}

/**
Determines possible moves for a knight, given its board coordinates.
**/
const getKnightMoves = (string: string) => {
	const pos = getPosFromString(string)
	const vectorDirection = [1, -1]
	const vectorMagnitude = [1, 2]

	const vectorCombos: Array<number> = [ ]

	vectorDirection.forEach((dir) => {
		vectorMagnitude.forEach(mag => {
			vectorCombos.push(dir * mag)
		})
	})

	const moveCombos: Array<Coordinates> = [ ]

	vectorCombos.forEach((xMove) => {
		vectorCombos.forEach((yMove) => {
			if (Math.abs(xMove) === Math.abs(yMove)) return // continue
			moveCombos.push([xMove, yMove])
		})
	})

	const validMoveCombos = moveCombos
	.map((delta): Coordinates => {
    const x = pos[0] + delta[0]
		return [x, pos[1] + delta[1]]
	})
	.filter((newPos) => {
		if (newPos[0] < 0) return false
		if (newPos[1] < 0) return false
		if (newPos[0] >= GRID_LENGTH) return false
		if (newPos[1] >= GRID_LENGTH) return false
		return true
	})

	return validMoveCombos
}

/**
Counts the results from the previous function.
**/
const countKnightMoves = (s: string) => getKnightMoves(s).length

export default countKnightMoves
