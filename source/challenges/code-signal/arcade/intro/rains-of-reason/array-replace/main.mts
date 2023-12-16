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

const getSubstitutedArray = <Element = unknown, Substitute = Element> (
	inputArray: Array<Element>,
	elemToReplace: Element,
	substitutionElem: Substitute,
) => {
	const outputArray = inputArray.map((e) => {
		if (e === elemToReplace) return substitutionElem
		else return e
	})
	return outputArray
}

export default getSubstitutedArray
