export const NoKey = {};

export class KeyMonoid {
	zero() {
		return NoKey;
	}

	plus(a, b) {
		return b === NoKey ? a : b;
	}
}
