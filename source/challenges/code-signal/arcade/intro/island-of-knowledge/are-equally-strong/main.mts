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

const getBestArms = (leftArm: number, rightArm: number) => {
	const bestArms = [leftArm, rightArm]
	bestArms.sort((a, b) => a - b)
	return bestArms
}

const armsAreEqual = (
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number,
) => {
	const yourArms = getBestArms(yourLeft, yourRight)
	const friendsArms = getBestArms(friendsLeft, friendsRight)
	return JSON.stringify(yourArms) === JSON.stringify(friendsArms)
}

export default armsAreEqual
