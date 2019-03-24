🌈 Sass-A11yColor
==============

> Generate the nearest accessible color with Sass.


## Install

```shell
npm install sass-a11ycolor
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

The function `AU-a11ycolor` takes three parameters:

```scss
AU-a11ycolor( $toMakeA11y, $background, $ratioKey: 'small' );
```

1. `$toMakeA11y` - The color that is to be changed
1. `$background` - The background color. Used to check the contrast ratio
1. `$ratioKey`   - The keyword 'small' or 'large' to set the WCAG 2.1 contrast ratio to 3.0 (large) or 4.5 (small)


## Release History

* v2.0.6 - Use files instead of `.npmignore`
* v2.0.5 - Remove `prePublishonly` npm script
* v2.0.4 - Remove .github directory from NPM
* v2.0.3 - Replace travis with GitHub actions
* v2.0.2 - Update dependencies
* v2.0.1 - Fixing issue when a color passes on white and black, update docs, dependencies and spacing
* v2.0.0 - Binary search, remove steps
* v1.1.0 - Moving to `sass` from `node-sass` for tests
* v1.0.4 - Updating dependencies
* v1.0.3 - While loop makes old code unecessary
* v1.0.2 - Stoping iteration if the color is accessible
* v1.0.1 - Fixing issues with the a11ycolor function
* v1.0.0 - First release
