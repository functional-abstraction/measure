import test from 'ava';

import {range} from '@iterable-iterator/range';
import {reduce} from '@iterable-iterator/reduce';
import {map} from '@iterable-iterator/map';

import {Measures} from '../../src/index.js';

test('counter', (t) => {
	const counter = Measures.COUNTER;

	t.is(counter.measure('#'), 1);
	t.is(counter.plus(counter.zero(), counter.measure('#')), 1);
	t.is(counter.plus(counter.zero(), counter.zero(), counter.measure('#')), 1);

	t.is(counter.plus(counter.measure(), counter.measure('#')), 2);
	t.is(
		counter.plus(counter.measure(), counter.measure(), counter.measure('#')),
		3,
	);

	const N = 1000;

	t.is(
		reduce(
			counter.plus.bind(counter),
			map(counter.measure.bind(counter), range(N)),
			counter.zero(),
		),
		N,
	);
});
