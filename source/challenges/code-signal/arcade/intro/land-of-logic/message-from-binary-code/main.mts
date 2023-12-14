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
Given a string-code of zeroes and ones, this function returns
	8-bit sections of binary converted into ASCII characters.
**/
const getMessageFromBinary = (messageCode: string) => {
	let message = ''
	for (let startIndex = 0; startIndex <= messageCode.length - 8; startIndex += 8) {
		const endIndex = startIndex + 8
		const binaryCode = messageCode.slice(startIndex, endIndex)
		const characterCode = parseInt(binaryCode, 2)
		const character = String.fromCharCode(characterCode)
		message += character
	}
	return message
}

export default getMessageFromBinary
