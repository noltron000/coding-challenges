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

const hasValidCharacters = (string: string) => {
	return /^\d+$/.test(string)
}

const hasValidFront = (string: string) => {
	if (string === "0") return true
	return string.split("").at(0) !== "0"
}

const hasValidRange = (number: number) => {
	return 0 <= number && number <= 255
}

const testString = (string: string) => {
	if (!hasValidCharacters(string)) return false
	if (!hasValidFront(string)) return false
	const number = parseInt(string)
	return hasValidRange(number)
}

const isAddressIPv4 = (string: string) => {
	const array = string.split(".")

	if (array.length !== 4) return false

	const reducer = ((result: boolean, string: string) => {
		if (result === false) return false
		else return testString(string)
	})

	return array.reduce(reducer, true)
}

export default isAddressIPv4
