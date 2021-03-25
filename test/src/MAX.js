import test from 'ava';

import {range, reduce, map} from '@aureooms/js-itertools';

import {Measures} from '../../src/index.js';

test('max', (t) => {
	const max = Measures.MAX;

	t.is(max.measure(4), 4);
	t.is(max.plus(max.zero(), max.measure(4)), 4);
	t.is(max.plus(max.zero(), max.zero(), max.measure(4)), 4);

	t.is(max.plus(max.measure(1), max.measure(2), max.measure(3)), 3);
	t.is(max.plus(max.measure(1), max.measure(3), max.measure(2)), 3);
	t.is(max.plus(max.measure(3), max.measure(2), max.measure(1)), 3);

	const N = 1000;

	t.is(
		reduce(
			max.plus.bind(max),
			map(max.measure.bind(max), range(N)),
			max.zero(),
		),
		N - 1,
	);
});
