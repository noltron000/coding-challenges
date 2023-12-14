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
Given a 2D representation of a picture (using an array of like-sized strings),
	add an asterisk-border around the puicture and return the new array.
**/
const addBorder = (picture: Array<string>) => {
	let framedPicture = [...picture]

	for (let index = 0; index < picture.length; index ++) {
		framedPicture[index] = `*${framedPicture[index]}*`
	}

	const horizontalRule = '*'.repeat(framedPicture.at(0)?.length ?? 0)
	framedPicture.unshift(horizontalRule)
	framedPicture.push(horizontalRule)

	return framedPicture
}

export default addBorder
