# postcss-host

> [PostCSS](https://github.com/postcss/postcss) plugin to make :host selectors work properly with pseudo-classes

## What is it about

If you work with Shadow DOM and web components then you should be familiar with `:host` selector. It has some specialty.

Instead of

```css
:host:hover {
    ...
}

:host.bar {
    ...
}
```

you should write

```css
:host(:hover) {
    ...
}

:host(.bar) {
    ...
}
```

Postcss-host transforms the first into the second.

It could be useful when css is produced automatically by some preprocessor so you can't do it manually.

## Installation

```console
$ npm install postcss-host
```

## Usage

```js
// dependencies
var fs = require("fs")
var postcss = require("postcss")
var postcssHost = require("postcss-host")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

// process css
var output = postcss()
  .use(postcssHost())
  .process(css, {
    from: "src/index.css"
    to: "dist/index.css"
  })
  .css
```

Checkout [tests](test) for examples.

## Contributing

Work on a branch

```console
$ git clone https://github.com/vitkarpov/postcss-host.git
$ git checkout -b patch-1
$ npm install
$ npm test
```