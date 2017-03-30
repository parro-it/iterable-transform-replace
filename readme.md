# iterable-transform-replace

[![Greenkeeper badge](https://badges.greenkeeper.io/parro-it/iterable-transform-replace.svg)](https://greenkeeper.io/)

> An iterable transform that replace specified item


## Usage

This example replace `response` with `42`:

```js
const replace = require('iterable-transform-replace');

const source = [1, 2, 'response', 3];
console.log(Array.from(replace('response', 42, source)));
```

This will output

```
[1, 2, 42, 3]
```

[![Travis Build Status](https://img.shields.io/travis/parro-it/iterable-transform-replace/master.svg)](http://travis-ci.org/parro-it/iterable-transform-replace)
[![Code Climate](https://img.shields.io/codeclimate/github/parro-it/iterable-transform-replace.svg)](https://codeclimate.com/github/parro-it/iterable-transform-replace)
[![Coverage Status](https://coveralls.io/repos/github/parro-it/iterable-transform-replace/badge.svg?branch=master)](https://coveralls.io/github/parro-it/iterable-transform-replace?branch=master)
[![NPM downloads](https://img.shields.io/npm/dt/iterable-transform-replace.svg)](https://npmjs.org/package/iterable-transform-replace)


## API

```js
const iterableTransformReplace = (oldItem: any, newItem: any, source: Iterable): Iterable
```

Given an iterable source object, return another iterablke with all items equal
to `oldItem` replaced with `newItem`.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install iterable-transform-replace
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT

