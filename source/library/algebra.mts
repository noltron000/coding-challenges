/**
Since JavaScript is missing some basic mathematical methods,
	I thought it might be fun to make my own Algebra library.
It mostly includes some basic mathematical operations.

Normally I'd import and export this using ECMAScript Modules,
	but CodeSignal doesn't support solutions with multiple files.
**/
class Algebra {
	/**
 	Adds many numbers together.
	If no parameters are provided, returns 0.
	**/
	static add (...addends: Array<number>) {
		return addends.reduce((a, b) => (a + b), 0)
	}

	/**
	Multiplies many numbers together.
	If no parameters are provided, returns 1.
	**/
	static multiply (...multipliers: Array<number>) {
		return multipliers.reduce((a, b) => (a * b), 1)
	}

	/**
	Obtains the factorial of a single number.
	**/
	static factorialize (number: number) {
		const multipliers = new Array(number)
		.fill(null).map((_, index) => (index + 1))

		return Algebra.multiply(...multipliers)
	}

	/**
	A reducer function that adds two numbers together.
	**/
	static addition (
		addend1: number,
		addend2: number,
	) {
		return Algebra.add(addend1, addend2)
	}

	/**
	A reducer function that multiplies two numbers.
	**/
	static multiplication (
		multiplier1: number,
		multiplier2: number,
	) {
		return Algebra.multiply(multiplier1, multiplier2)
	}
}

export {Algebra}
