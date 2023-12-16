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

const findArrayMaximalAdjacentDifference = (inputArray: Array<number>) => {
	const deltas: Array<number> = [ ]

	for (let i = 1; i < inputArray.length; i++) {
		const delta = Math.abs(inputArray[i - 1] - inputArray[i])
		deltas.push(delta)
	}

	return Math.max(...deltas)
}

export default findArrayMaximalAdjacentDifference
