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

const sumDigits = (n: number) => {
	return n
	.toString( )
	.split("")
	.map(digit => parseInt(digit))
	.reduce((sum, digit) => sum + digit)
}


const getDegreeOfDigit = (n: number) => {
	let counter = 0
	while (n.toString( ).length > 1) {
		n = sumDigits(n)
		counter += 1
	}
	return counter
}

export default getDegreeOfDigit
