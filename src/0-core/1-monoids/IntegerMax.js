export class IntegerMax {
	zero() {
		return Number.NEGATIVE_INFINITY;
	}

	plus(a, b) {
		return Math.max(a, b);
	}
}
