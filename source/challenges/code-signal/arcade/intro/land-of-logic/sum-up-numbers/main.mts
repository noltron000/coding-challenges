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
This function parses a shopping receipt string.
It returns the final cost of the purchase.
**/
const parseShoppingString = (inputString: string) => {
	let count = 0
	const foundNumbers = [...inputString.matchAll(/\d+/g)]
	foundNumbers.forEach((numberString) => {
		count += parseFloat(numberString.toString( ))
	})
	return count
}

export default parseShoppingString
