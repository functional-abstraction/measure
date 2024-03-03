import test from 'ava';

import {range} from '@iterable-iterator/range';
import {reduce} from '@iterable-iterator/reduce';
import {map} from '@iterable-iterator/map';

import {Measures} from '#module';

test('key_len', (t) => {
	const key_len = Measures.KEY_LEN;

	t.deepEqual(key_len.measure(4), [4, 1]);
	t.deepEqual(key_len.plus(key_len.zero(), key_len.measure(4)), [4, 1]);
	t.deepEqual(key_len.plus(key_len.measure(4), key_len.zero()), [4, 1]);
	t.deepEqual(
		key_len.plus(key_len.zero(), key_len.zero(), key_len.measure(4)),
		[4, 1],
	);
	t.deepEqual(
		key_len.plus(key_len.zero(), key_len.measure(4), key_len.zero()),
		[4, 1],
	);
	t.deepEqual(
		key_len.plus(key_len.measure(4), key_len.zero(), key_len.zero()),
		[4, 1],
	);

	t.deepEqual(
		key_len.plus(key_len.measure(1), key_len.measure(2), key_len.measure(3)),
		[3, 3],
	);
	t.deepEqual(
		key_len.plus(key_len.measure(1), key_len.measure(3), key_len.measure(2)),
		[2, 3],
	);
	t.deepEqual(
		key_len.plus(key_len.measure(3), key_len.measure(2), key_len.measure(1)),
		[1, 3],
	);

	const N = 1000;

	t.deepEqual(
		reduce(
			key_len.plus.bind(key_len),
			map(key_len.measure.bind(key_len), range(N)),
			key_len.zero(),
		),
		[N - 1, N],
	);
});
