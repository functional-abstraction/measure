import test from 'ava';

import {range} from '@iterable-iterator/range';
import {reduce} from '@iterable-iterator/reduce';
import {map} from '@iterable-iterator/map';

import {Measures} from '../../src/index.js';

test('key', (t) => {
	const key = Measures.KEY;

	t.is(key.measure(4), 4);
	t.is(key.plus(key.zero(), key.measure(4)), 4);
	t.is(key.plus(key.measure(4), key.zero()), 4);
	t.is(key.plus(key.zero(), key.zero(), key.measure(4)), 4);
	t.is(key.plus(key.zero(), key.measure(4), key.zero()), 4);
	t.is(key.plus(key.measure(4), key.zero(), key.zero()), 4);

	t.is(key.plus(key.measure(1), key.measure(2), key.measure(3)), 3);
	t.is(key.plus(key.measure(1), key.measure(3), key.measure(2)), 2);
	t.is(key.plus(key.measure(3), key.measure(2), key.measure(1)), 1);

	const N = 1000;

	t.is(
		reduce(
			key.plus.bind(key),
			map(key.measure.bind(key), range(N)),
			key.zero(),
		),
		N - 1,
	);
});
