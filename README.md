# swap.js

Horribly simple templating.

[![Build Status](https://travis-ci.org/gsf/swap.js.png?branch=master)](https://travis-ci.org/gsf/swap.js)

## Usage

Swap performs string interpolation. 

```js
var swap = require('swap')

var story = swap('{subject} {action} to the {location}.', {
  subject: 'Elle and Dez',
  action: 'strolled',
  location: 'market'
})

console.log(story) // "Elle and Dez strolled to the market."
```

Comments are contained within exclamation points.

```js
var topSecret = swap('I am here{! with two kittens!}.')

console.log(topSecret) // "I am here."
```

Prepend with a backslash to escape a replacement field.

```js
var demo = swap('This is a field: \{bob}.')

console.log(demo) // "This is a field: {bob}."
```
