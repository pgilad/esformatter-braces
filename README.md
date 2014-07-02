# [esformatter](https://github.com/millermedeiros/esformatter)-braces

> esformatter plugin for enforcing braces around statements

[![NPM Version](http://img.shields.io/npm/v/esformatter-braces.svg?style=flat)](https://npmjs.org/package/esformatter-braces)
[![NPM Downloads](http://img.shields.io/npm/dm/esformatter-braces.svg?style=flat)](https://npmjs.org/package/esformatter-braces)
[![Build Status](http://img.shields.io/travis/pgilad/esformatter-braces.svg?style=flat)](https://travis-ci.org/pgilad/esformatter-braces)

**esformatter-braces** will enforce braces around your statements where needed. Checkout [Jetbrain's Idea](http://www.jetbrains.com/idea/webhelp10.5/wrapping-and-braces.html)
and specifically the **Force braces - always** section for more information on behavior.

This complies with the **jshint** option - [curly](http://www.jshint.com/docs/options/#curly).

Currently the following node types are handled:
 **If conditionals**, **While**, **Do While**, **For loops**

Turn this:
```js
if (theSkyIsBlue)
    stareAtItForAWhile();
```

into:
```js
if (theSkyIsBlue) {
    stareAtItForAWhile();
}
```

This plugin currently blindly wraps the needed statement with `{ %s }` formatting.

For any formatting (such as braces placement, spacing and line wrapping) use esformatter or other plugins for that.

## Goals

- Add similar options to IDEA's: **Do not force** and **Multiline**
- Possibly do the reverse: remove braces if possible (single line statements)

## Installation

```sh
$ npm install esformatter-braces --save-dev
```

## Config

Newest esformatter versions autoload plugins from your `node_modules` [See this](https://github.com/millermedeiros/esformatter#plugins)

Add to your esformatter config file:

```json
{
  "plugins": [
    "esformatter-quotes"
  ]
}
```

Or you can manually register your plugin:
```js
// register plugin
esformatter.register(require('esformatter-quotes'));
```

## Usage

```js
var fs = require('fs');
var esformatter = require('esformatter');

var str = fs.readFileSync('someKewlFile.js').toString();
var output = esformatter.format(str);
//-> output will now contain the formatted string
```

For more options and usage please see [esformatter](https://github.com/millermedeiros/esformatter)

## License

MIT ©2014 **Gilad Peleg**
