[![Taylor Swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![Volkswagen](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
[![Build Status](https://travis-ci.org/axelspringer/generator-go-lang.svg?branch=master)](https://travis-ci.org/axelspringer/generator-go-lang)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# A Yeoman Golang Generator

> We are very sorry Gophers, but other names for the generator where taken, so we choose `go-lang`. But we have `gocreate` as an alias.

## Getting Started

> We highly recommand to use `nvm` ([NVM](https://github.com/creationix/nvm)) to manage your Node versions, and to use the most recent versions

> If you have [dep](https://github.com/golang/dep) for Go package management installed, the generator provides you with an option for that to initialize

> We use [Gazelle](https://github.com/bazelbuild/bazel-gazelle) as underlying [Bazel](https://github.com/bazelbuild) generator
> Also we use [dep](https://github.com/golang/dep) as vendoring tools with [Bazel](https://github.com/bazelbuild)

First, you have to install `yo`, as to use any [Yeoman](http://yeoman.io/) Generator. 

```bash
npm i -g generator-go-lang
```

Create your project folder your `$GOPATH`. This is recommended in use with [dep](https://github.com/golang/dep).

```bash
mkdir $GOPATH/src/<username>/your_new_app && cd $_
```

```bash
gocreate
```
> You could also `npm i -g yo` and use `yo go-lang`

```bash
bazel run //:gazelle
bazel run //:your_new_app
```

Have fun!

## Development

We can highly recommend to consult the Yeoman Guide to [write your own Yeoman Generator](http://yeoman.io/authoring/). Most importantly, to use the generator locally, you have to `npm link` the generator.

```bash
npm run watch
```

## License
[MIT](/LICENSE)
