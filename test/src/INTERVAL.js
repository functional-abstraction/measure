import test from 'ava';

import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {reduce} from '@iterable-iterator/reduce';

import {Measures} from '#module';

test('interval', (t) => {
	const interval = Measures.INTERVAL;

	t.deepEqual(interval.measure([2, 7]), [2, 7]);

	t.deepEqual(interval.plus(interval.zero(), interval.measure([2, 7])), [2, 7]);
	t.deepEqual(interval.plus(interval.measure([2, 7]), interval.zero()), [2, 7]);

	t.deepEqual(
		interval.plus(interval.zero(), interval.zero(), interval.measure([2, 7])),
		[2, 7],
	);
	t.deepEqual(
		interval.plus(interval.zero(), interval.measure([2, 7]), interval.zero()),
		[2, 7],
	);
	t.deepEqual(
		interval.plus(interval.measure([2, 7]), interval.zero(), interval.zero()),
		[2, 7],
	);

	const N = 1000;

	t.deepEqual(
		reduce(
			interval.plus.bind(interval),
			map((i) => interval.measure([i, N - i]), range(N)),
			interval.zero(),
		),
		[N - 1, N],
	);
});
