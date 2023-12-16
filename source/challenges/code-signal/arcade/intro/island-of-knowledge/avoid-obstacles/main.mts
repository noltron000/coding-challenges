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

const canAvoidObstacles = (obstacles: Array<number>) => {
	let smallestJump = Math.max(...obstacles) + 1

	for (let jump = smallestJump - 1; jump > 0; jump--) {
		const reducer = (result: boolean, obstacle: number) => {
			if (result === false) return false
			else return obstacle % jump !== 0
		}

		const jumpAvoidsObstacles = obstacles.reduce(reducer, true)
		if (jumpAvoidsObstacles && jump < smallestJump) {
			smallestJump = jump
		}
	}

	return smallestJump
}

export default canAvoidObstacles
