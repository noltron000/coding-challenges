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

/**
This finds the area of a jagged square-like shape,
	rotated 45 degrees on some grid-aligned axes.
**/
const findShapeArea = (n: number) => {
	// At (n = 1), the area is also just 1.
	// This is our base case.
	let totalArea = 1
	let iterator = 0

	// Each time (n) increases, the area of the shape
	//  increases by four times (n - 1) for that (n).
	while (iterator < n) {
		totalArea += iterator * 4
		iterator += 1
	}

	return totalArea
}

export default findShapeArea
