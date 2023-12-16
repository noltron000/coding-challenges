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

function * generateIndices (k: number) {
	// subtract one to make it zero-indexed.
	let index = k - 1
	yield index

	while (true) {
		index += k
		yield index
	}
}

const getElementsAtModulo = (inputArray: Array<number>, k: number) => {
	const outputArray = [...inputArray]

	// Get all skipped indices in ascending order.
	const skippedIndices: Array<number> = [ ]
	for (const index of generateIndices(k)) {
		if (index >= inputArray.length) break
		skippedIndices.push(index)
	}

	// In descending order, remove items at each index.
	while (skippedIndices.length > 0) {
		const index = skippedIndices.pop( )
		if (index == null) break
		outputArray.splice(index, 1)
	}

	return outputArray
}

export default getElementsAtModulo
