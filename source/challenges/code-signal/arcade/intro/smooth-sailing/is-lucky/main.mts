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

import {Algebra} from "library/algebra.mts"

/**
This special function checks if the sum of the digits
	in the first and second half of an integer are the same.
**/
const isLucky = (inputInteger: number) => {
	const digits = inputInteger
	.toString( )
	.split("")
	.map((digit) => parseInt(digit))

	const firstHalf = digits
	.slice(0, Math.floor(digits.length / 2))
	.reduce(Algebra.addition, 0)

	const lastHalf = digits
	.slice(Math.ceil(digits.length / 2), digits.length)
	.reduce(Algebra.addition, 0)

	return firstHalf === lastHalf
}

export default isLucky
