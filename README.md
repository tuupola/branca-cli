#  Branca CLI

Commandline tool for creating and inspecting [Branca tokens](https://github.com/tuupola/branca-spec).

## Install

Install the library using [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/).

``` bash
$ yarn global add branca-cli
$ npm install -g branca-cli
```

## Usage

```
  Command line tool for creating and inspecting Branca API tokens.

  Usage
      $ branca encode <options>
      $ branca decode <options>

  Options
      --key, -k <key>               Secret key as a string
      --nonce, -n <nonce>           Nonce as string
      --payload, -p <payload>       Token payload as a string
      --timestamp, -t <timestamp>   UNIX timestamp

      --token <token>               Base62 encoded token
      --ttl <ttl>                   TTL for decoding

  Examples
      $ branca encode --key supersecretkeyyoushouldnotcommit \
        --nonce 0x0102030405060708090a0b0c0102030405060708090a0b0c \
        --timestamp 123206400 --payload "foo"

      $ branca decode --key supersecretkeyyoushouldnotcommit \
        --nonce 0x0102030405060708090a0b0c0102030405060708090a0b0c \
        --token 5XhVqpMwNYFFQyukAbfLz0TiQEVFQn8wDYZDmcSHFIeTNQ7zUW2n2CeZUpB1p22hA
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email tuupola@appelsiini.net instead of using the issue tracker.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.