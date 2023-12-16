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

const countNeededAdditions = (inputArray) => {
	const outputArray = [...inputArray]

	let index = 1
	let moves = 0

	while (index < outputArray.length) {
		const lastValue = outputArray[index - 1]
		const thisValue = outputArray[index]

		if (thisValue > lastValue) {
			index++
		}

		else {
			moves++
			outputArray[index]++
		}
	}

	return moves
}

export default countNeededAdditions
