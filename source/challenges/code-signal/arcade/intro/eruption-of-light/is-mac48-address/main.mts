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

const isHex = (string: string) => {
	const result = string.match(/^[\dA-Fa-f]{2}$/)
	return result != null
}

const isMAC48 = (string: string) => {
	const groups = string.split("-")
	if (groups.length !== 6) return false
	for (const group of groups) {
		if (group.length !== 2) return false
		if (isHex(group) === false) return false
	}
	return true
}

export default isMAC48
