[js-measure](http://aureooms.github.io/js-measure)
==

Measure code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-measure.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-measure/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-measure.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-measure)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-measure.svg?style=flat)](http://bower.io/search/?q=aureooms-js-measure)
[![Build Status](http://img.shields.io/travis/aureooms/js-measure.svg?style=flat)](https://travis-ci.org/aureooms/js-measure)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-measure.svg?style=flat)](https://coveralls.io/r/aureooms/js-measure)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-measure.svg?style=flat)](https://david-dm.org/aureooms/js-measure#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-measure.svg?style=flat)](https://david-dm.org/aureooms/js-measure#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-measure.svg?style=flat)](https://codeclimate.com/github/aureooms/js-measure)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-measure.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-measure)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-measure.svg?style=flat)](https://github.com/aureooms/js-measure/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-measure.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-measure)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-measure
# or
jspm install npm:aureooms-js-measure
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-measure
```

### bower
```terminal
bower install aureooms-js-measure
```

### ender
```terminal
ender add aureooms-js-measure
```

### jam
```terminal
jam install aureooms-js-measure
```

### spm
```terminal
spm install aureooms-js-measure --save
```

### npm
```terminal
npm install aureooms-js-measure --save
```

## Require
### jspm
```js
let measure = require( "github:aureooms/js-measure" ) ;
// or
import measure from 'aureooms-js-measure' ;
```
### duo
```js
let measure = require( "aureooms/js-measure" ) ;
```

### component, ender, spm, npm
```js
let measure = require( "aureooms-js-measure" ) ;
```

### bower
The script tag exposes the global variable `measure`.
```html
<script src="bower_components/aureooms-js-measure/js/dist/measure.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-measure" ] , function ( measure ) { ... } ) ;
```