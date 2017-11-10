# Slugme

[![NPM Version][npm-version]][npm-url]
[![travis][travis-badge]][travis-url]
[![xo][xo-badge]][xo-url]

This is a simple javascript function that returns slugified string.
The slugification is useful for URL build from accentuated strings.

 It replaces accentuated chars to non-accentuated and spaces by the minus sign. All other chars (non-alphanumeric) are removed or replaced.


# Install

```
npm i slugme -S
```

# Usage

```js
const slugme = require('slugme');
const result = slugme('Être en été est à mi-chemin de noël');

console.log(result);

//=> etre-en-ete-est-a-mi-chemin-de-noel

```

A one-page browser version [is available here](test/browser.htm).

# Misc

- [Golang version](https://github.com/metal3d/go-slugify)

# Licence

MIT

[npm-version]:https://img.shields.io/npm/v/slugme.svg
[npm-url]: https://npmjs.org/package/slugme
[travis-badge]: http://img.shields.io/travis/arthurlacoste/js-slug-me.svg
[travis-url]: https://travis-ci.org/arthurlacoste/js-slug-me
[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
