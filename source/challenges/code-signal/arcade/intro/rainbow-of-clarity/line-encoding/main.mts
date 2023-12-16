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

**/
const seperateConsecutiveChars = (string: string) => {
	let charGroups: Array<string> = [ ]

	string.split("").forEach((char) => {
		if (charGroups.at(-1)?.at(0) === char) {
			charGroups[charGroups.length - 1] += (char)
		}
		else {
			charGroups.push(char)
		}
	})

	return charGroups
}

/**
Given a char group string like `"aaa"` or `"b"`,
	this function returns the encoded version, like `"3a"` or simply `"b"`.
**/
const encodeCharGroup = (charGroup: string) => {
	const char = charGroup.at(0)
	const count = charGroup.length
	if (count > 1) return `${count}${char}`
	else return char
}

/**
Encodes a string to concentrate or shorten its repeated characters.
It uses numbers to declare how many times a character is repeated.
Because of this, the string shouldn't have any numbers in it.
**/
const encodeLine = (string: string) => {
	const charGroups = seperateConsecutiveChars(string)
	return charGroups.map((group) => encodeCharGroup(group)).join("")
}

export default encodeLine
