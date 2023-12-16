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

function * generateHeights (upSpeed: number, downSpeed: number) {
	let height = 0
	let days = 0
	yield {height, days}

	while (true) {
		days += 1
		height += upSpeed
		yield {height, days}
		height -= downSpeed
	}
}

const countDaysOfGrowth = (upSpeed: number, downSpeed: number, desiredHeight: number) => {
	for (const {height, days} of generateHeights(upSpeed, downSpeed)) {
		if (height >= desiredHeight) return days
	}
}

export default countDaysOfGrowth
