🌈 Sass-A11yColor [![Build Status](https://travis-ci.org/alex-page/sass-a11ycolor.svg?branch=master)](https://travis-ci.org/alex-page/sass-a11ycolor)
==============

> Generate the nearest accessible color with Sass.


## Install

```shell
$ npm install sass-a11ycolor
```


## Usage

```scss
@import node-modules/sass-a11ycolor/dist/index

body {
	color: AU-a11ycolor( red, blue );
}
```

this will compile to:

```css
body {
	color: #ffa3a3;
}
```


## Parameters

The function `AU-a11ycolor` takes four parameters:

```scss
AU-a11ycolor( $toMakeA11y, $background, $ratioKey: 'small' );
```

1. `$toMakeA11y` - The color that is to be changed
1. `$background` - The background color to for the contrast
1. `$ratioKey`   - The keyword 'small' or 'large' to set the WCAG 2.1 contrast ration or 3.0 or 4.5


## Release History

* v1.1.0 - Moving to `sass` from `node-sass` for tests
* v1.0.4 - Updating dependencies
* v1.0.3 - While loop makes old code unecessary
* v1.0.2 - Stoping iteration if the color is accessible
* v1.0.1 - Fixing issues with the a11ycolor function
* v1.0.0 - First release
