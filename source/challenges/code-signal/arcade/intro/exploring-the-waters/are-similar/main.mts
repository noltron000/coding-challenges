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

import { Histogram } from "library/histogram.mjs"

/**
Compiles two histograms and checks if their counters are the same for each element.
**/
const frequenciesAreMatching = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	const aHisto = new Histogram(a)
	const bHisto = new Histogram(b)

	for (const [key, aCount] of aHisto.allEntries( )) {
		const bCount = bHisto.get(key)
		if (aCount === bCount) continue
		else return false
	}

	return true
}

/**
This checks if two arrays have almost-matching positionings.
Assumes their lengths are the same.
**/
const positionsAreMatching = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	// The tolerance can only be 0 or 1 right now.
	// In cases where three positions are swapped around,
	//  a tolerance of 2 will not report the correct value.
	let mismatches = 0
	let tolerance = 1

	// Counts out-of-line positions.
	for (let index = 0; index < a.length; index++) {
		if (a[index] !== b[index]) mismatches += 1
	}

	return !(mismatches / 2 > tolerance)
}

/**
This checks if two arrays are "almost" the same.
They must have the same elements, with the nearly the same indices.
**/
const arraysAreSimilar = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	if (!frequenciesAreMatching(a, b)) return false
	else if (!positionsAreMatching(a, b)) return false
	else return true
}

export default arraysAreSimilar
