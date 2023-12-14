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
Given a paragraph, parse out the longest word it contains.
**/
const getLongestWord = (text: string) => {
	const result = [...text.matchAll(/\b[a-z,A-Z]+?\b/g)]
	.map(res => res.at(0) ?? '')
	.reduce((bestWord, currentWord) => {
		if (bestWord.length < currentWord.length) return currentWord
		else return bestWord
	})
	return result
}

export default getLongestWord
