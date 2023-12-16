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

const countCompetetiveCandidates = (
	currentVotes: Array<number>,
	remainingVotes: number,
) => {
	const mostVotes = Math.max(...currentVotes)

	const numLeading = currentVotes
	.filter((numVotes) => (
		numVotes === mostVotes
	))
	.length

	const hasTie = numLeading > 1

	let numCompetitors = 0
	currentVotes.forEach((numVotes) => {
		if (numVotes + remainingVotes > mostVotes) numCompetitors += 1
		else if (!hasTie && numVotes === mostVotes) numCompetitors += 1
	})

	return numCompetitors
}

export default countCompetetiveCandidates
