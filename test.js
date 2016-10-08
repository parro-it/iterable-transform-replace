import 'babel-register';
import test from 'ava';
import iterableTransformReplace from './main';

test('exports a function', t => {
	t.is(typeof iterableTransformReplace, 'function');
});
