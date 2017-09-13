[![Taylor Swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![Volkswagen](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# A Yeoman Golang Generator

> We are very sorry Gophers, but other names for the generator where taken, so we choose `go-lang`

## Getting Started

> We highly recommand to use `nvm` ([NVM](https://github.com/creationix/nvm)) to manage your Node versions, and to use the most recent versions

First, you have to install `yo`, as to use any [Yeoman](http://yeoman.io/) Generator. 

```
npm i -g yo
```

You install the generator by running the following command.

```
npm i -g generator-go-lang
```

Create your project in the `$GOPATH`.

```
mkdir $GOPATH/your-new_app && cd $_
```

Have fun.

```
yo go-lang
```

## Development

We can highly recommend to consult the Yeoman Guide to [write your own Yeoman Generator](http://yeoman.io/authoring/). Most importantly, to use the generator locally, you have to `npm link` the generator.

## License
[MIT](/LICENSE)