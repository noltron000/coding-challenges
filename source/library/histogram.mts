/**
A Histogram is an object that tracks the number of occurances
	of a particular item in a list of some sort.
Here, I've decided that a Map is a reasonable object to extend from.

Normally I'd import and export this using ECMAScript Modules,
	but CodeSignal doesn't support solutions with multiple files.
**/
class Histogram <T = unknown> extends Map<T, number> {
	constructor (array?: Array<T>) {
		super( )

		if (array != null) {
			array.forEach((element) => {
				this.increment(element)
			})
		}
	}

	/**
	The getter works like normal, except it defaults to zero instead of undefined.
	**/
	override get (key: T) {
		return super.get(key) ?? 0
	}

	/**
	Adds `1` to the counter for this specified item.
	If the item doesn't exist yet, it creates an entry in the Histogram.
	**/
	increment (element: T) {
		const counter = this.get(element) ?? 0
		this.set(element, counter + 1)
		return this
	}

	/**
	A shorthand to get all keys from a map.
	**/
	allKeys ( ) {
		return [...this.keys( )]
	}

	/**
	A shorthand to get all values from a map.
	**/
	allValues ( ) {
		return [...this.values( )]
	}

	/**
	A shorthand to get all entries from a map.
	**/
	allEntries ( ) {
		return [...this.entries( )]
	}
}

export {Histogram}
