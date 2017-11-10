# Slugme

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
