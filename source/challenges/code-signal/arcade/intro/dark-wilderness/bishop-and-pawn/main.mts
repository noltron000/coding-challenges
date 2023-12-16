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

type Coordinates = {
	x: number,
	y: number,
}

const toCoordinates = (position: string): Coordinates => {
	const x = position.charCodeAt(0) - "a".charCodeAt(0)
	const y = parseInt(position.at(1)!)
	return {x, y}
}

const setOriginAt = (
	origin: Coordinates,
	...rest: Array<Coordinates>
): Array<Coordinates> => {
	const xDelta = -origin.x
	const yDelta = -origin.y

	return rest.map((pos) => ({
		x: pos.x + xDelta,
		y: pos.y + yDelta
	}))
}

const isDiagonal = (pos: Coordinates) => {
	return Math.abs(pos.x) === Math.abs(pos.y)
}

const solution = (bishopString: string, pawnString: string) => {
	let bishop = toCoordinates(bishopString)
	let pawn = toCoordinates(pawnString)

	pawn = setOriginAt(bishop, pawn).at(-1) ?? pawn
	bishop = {x: 0, y: 0}

	return isDiagonal(pawn)
}

export default solution
