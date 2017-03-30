import test from 'ava';
import replace from '.';

test('exports a function', t => {
	t.is(typeof replace, 'function');
});

test('replace `response` with `42`', t => {
	const source = [1, 2, 'response', 3];
	const result = Array.from(replace('response', 42, source));
	t.deepEqual(result, [1, 2, 42, 3]);
});
