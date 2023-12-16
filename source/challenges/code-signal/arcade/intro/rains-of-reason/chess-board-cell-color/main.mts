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

const getPosFromString = (cellString: string): [number, number] => {
	let [col, row] = cellString.toLowerCase( ).split("")

	const x = col.charCodeAt(0) - "a".charCodeAt(0)
	const y = parseInt(row) - 1

	return [x, y]
}

const getColor = ([x, y]: [number, number]) => {
	return (x + y) % 2
}

const getChessBoardColor = (cellString01: string, cellString02: string) => {
	const cellCoords01 = getPosFromString(cellString01)
	const cellCoords02 = getPosFromString(cellString02)
	return getColor(cellCoords01) === getColor(cellCoords02)
}

export default getChessBoardColor
