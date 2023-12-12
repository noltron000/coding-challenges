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
Given an array of statue sizes, this finds how many statues are needed
	to complete a consecutive collection of statues.
For example, `[4,2]` would need just `1` more statue (ie, `[2,3,4]`).
A collection of `1` or `0` statues is already complete,
	so the function would return `0` in this case.

This function is somewhat arbitrary, be sure to check the README!
**/
const countNeededStatues = (statueSizes: Array<number>) => {
	// Base case: there is no collection to complete.
	if (statueSizes.length === 0) return 0

	// We -must- collect a number of statues, such that their sizes
	//  are a complete series integers between two arbitrary numbers.
	//
	// For the best effect, these arbitrary numbers can simply
	//  be the minimum- and maximum-sized statues that we have already.
	// This allows us to collect the fewest additional statues.
	const minSize = Math.min(...statueSizes)
	const maxSize = Math.max(...statueSizes)

	// The number of statues in the complete set is
	//  the max-sized-statue, minus the min-sized-statue, plus one.
	// By subtracting the number of statues that we already have,
	//  we'll arrive at the number of additional statues that we'll need.
	return maxSize - minSize - statueSizes.length + 1
}

export default countNeededStatues
