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
Given a number, this function finds the max possible result
	when deleting one digit from the number.
**/
const findMaxAfterDeleteDigit = (n: number) => {
	const nString = n.toString( )
	let largest: number | null = null

	// Imagine deleting each digit from the number.
	// This is how we get the largest result.
	for (let index = 0; index < nString.length; index++) {
		const spliced = nString.split("")
		spliced.splice(index, 1)

		const current = parseInt(spliced.join(""))
		if (largest == null) largest = current
		else if (largest < current) largest = current
	}

	return largest
}

export default findMaxAfterDeleteDigit
