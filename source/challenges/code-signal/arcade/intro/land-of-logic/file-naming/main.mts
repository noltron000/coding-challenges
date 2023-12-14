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
Follows the naming convention specified in the README,
	to rename duplicate files in some directory.
**/
const renameDuplicates = (names: Array<string>) => {
	for (let index = 0; index < names.length; index++) {
		const upto = names.slice(0, index)
		const name = names.at(index)

		if (name != null && upto.includes(name)) {
			let ordinal = 1
			const getNewName = ( ) => `${name}(${ordinal})`

			while (upto.includes(getNewName( ))) ordinal ++
			names[index] = getNewName( )
		}
	}

	return names
}

export default renameDuplicates
