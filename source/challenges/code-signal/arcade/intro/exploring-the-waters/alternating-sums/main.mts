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

import {Algebra} from "library/algebra.mts"

/**
This uses a round-robin approach to assign members to two teams.
Each team gets one member before the next team gets one member.
The member array is assumed to be randomized, with their weights differing.
The returned value is the sum of the weights for each team, in an array.
**/
const alternateSum = (weights: Array<number>) => {
	const teams: [Array<number>, Array<number>] = [[ ], [ ]]

	// Distribute members amongst the teams.
	weights.forEach((member, index) => {
		const team = index % 2
		teams[team].push(member)
	})

	// Calculate the total weights for each team.
	const teamWeights = teams.map((team) => (
		team.reduce(Algebra.addition, 0)
	))

	return teamWeights
}

export default alternateSum
