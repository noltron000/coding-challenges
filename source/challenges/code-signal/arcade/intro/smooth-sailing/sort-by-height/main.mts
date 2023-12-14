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
This function takes an array of people, with foliage sprinkled between them.
We want to sort the people by height amongst the foliage -- but the bushes can't move.
The resulting array is the input array sorted, except for the bushes.
**/
const sortPeopleAmongstFoliage = (inputArray: Array<number>) => {
	// A piece of foliage always has a value of -1.
	const foliageFinder = (
		found: Array<number>,
		currentValue: number,
		currentIndex: number,
	) => {
		if (currentValue === -1) found.push(currentIndex)
		return found
	}

	const foliageIndices = inputArray
	.reduce(foliageFinder, [ ])

	const sortedPeople = inputArray
	.filter((height) => height !== -1)
	.sort((a, b) => a - b)

	// After sorting people from their height, we have to
	//	place them between the trees.
	// To do this, re-insert the foliage at the given indices.
	foliageIndices.forEach((index: number) => {
		sortedPeople.splice(index, 0, -1)
	})

	return sortedPeople
}

export default sortPeopleAmongstFoliage
