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
This function collects every possible pair of adjacent elements.
**/
const getAdjacentPairs = <T = unknown,> (...params: Array<T>) => {
	const pairs: Array<[T, T]> = [ ]

	// Loop over every possible pair of adjacent elements.
	// There are (n - 1) pairs, where (n) is the length of the list.
	for (let index = 0; index < params.length - 1; index++) {
		const p1 = params[index]
		const p2 = params[index + 1]
		pairs.push([p1, p2])
	}

	return pairs
}

/**
This function returns the largest possible product
	of any pair of adjacent elements in a given list.
**/
const findMaxAdjacentProduct = (...params: Array<number>) => {
	// If there aren't any parameters given, return null.
	let maxAdjacentProduct: number | null = null
	const adjacentPairs = getAdjacentPairs(...params)

	// Loop over every pair of adjacent elements, and find their product.
	for (const [p1, p2] of adjacentPairs) {
		const adjacentProduct = p1 * p2

		// Continue to find the max possible product in the loop.
		if (maxAdjacentProduct == null) maxAdjacentProduct = adjacentProduct
		else maxAdjacentProduct = Math.max(maxAdjacentProduct, adjacentProduct)
	}

	return maxAdjacentProduct
}

export default findMaxAdjacentProduct
