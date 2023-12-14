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
Determines whether a string follows an "HH:MM" time format.
**/
const isTimeValid = (time: string) => {
	let [hh, mm] = time
	.split(":")
	.map((s) => parseFloat(s))

	if (isNaN(hh)) return false
	if (isNaN(mm)) return false

	if (hh % 1 !== 0) return false
	if (mm % 1 !== 0) return false

	if (hh < 0) return false
	if (hh > 23) return false

	if (mm < 0) return false
	if (mm > 59) return false

	return true
}

export default isTimeValid
