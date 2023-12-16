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

const findMaximumSumOfSlice = (array: Array<number>, k: number) => {
	let largestSum = -Infinity
	for (let initialIndex = 0; initialIndex < array.length - k + 1; initialIndex++) {
		let sum = 0
		for (let index = initialIndex; index < initialIndex + k; index++) {
			sum += array[index]
		}

		if (sum > largestSum) largestSum = sum
	}
	return largestSum
}

export default findMaximumSumOfSlice
