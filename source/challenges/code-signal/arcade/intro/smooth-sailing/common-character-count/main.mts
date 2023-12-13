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

import {Algebra} from 'library/algebra.mts'
import {Histogram} from 'library/histogram.mts'

/*
This function performs a union-like function on two strings.
The result is a number which counts common characters between them.
*/
const countCommonCharacters = (string1: string, string2: string) => {
	// Generate histograms by using arrays of characters made from each string.
	const histo1 = new Histogram(string1.split(''))
	const histo2 = new Histogram(string2.split(''))

	const sharedHisto = new Histogram<string>( )

	// Generate the shared histogram.
	// This pattern is similar to a Set "union".
	histo1
	.allEntries( )
	.forEach(([key, value1]) => {
		const value2 = histo2.get(key) ?? 0
		const sharedValue = Math.min(value1, value2)
		sharedHisto.set(key, sharedValue)
	})

	// Add up all remaining histogram counters.
	const totalSharedGlyphs = sharedHisto
	.allValues( )
	.reduce(Algebra.addition)

	return totalSharedGlyphs
}

export default countCommonCharacters
