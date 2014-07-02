# [esformatter](https://github.com/millermedeiros/esformatter)-braces

> esformatter plugin for enforcing braces around statements

[![NPM Version](http://img.shields.io/npm/v/esformatter-braces.svg?style=flat)](https://npmjs.org/package/esformatter-braces)
[![NPM Downloads](http://img.shields.io/npm/dm/esformatter-braces.svg?style=flat)](https://npmjs.org/package/esformatter-braces)
[![Build Status](http://img.shields.io/travis/pgilad/esformatter-braces.svg?style=flat)](https://travis-ci.org/pgilad/esformatter-braces)

**esformatter-braces** will enforce adding braces to your statements. Please see [Jetbrain's Idea](http://www.jetbrains.com/idea/webhelp10.5/wrapping-and-braces.html)
and specifically the **Force braces - always** section for more information on behavior.

Currently this plugin handles the following statements:
1. If conditionals
2. While
3. Do While
4. For loops

This plugin currently blindly wraps the needed statement with `{ %s }` formatting. If you want additional formatting you should use
esformatter or other plugins for that. This plugin won't deal with braces placement or styling.

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
