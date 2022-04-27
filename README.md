#  Branca CLI

Commandline tool for creating and inspecting [Branca tokens](https://github.com/tuupola/branca-spec).

## Install

Install the binary using [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/).

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
      --payload, -p <payload>       Token payload as a string
      --timestamp, -t <timestamp>   UNIX timestamp

      --token <token>               Base62 encoded token
      --ttl <ttl>                   TTL for decoding

  Examples
      $ branca encode \
        --key 73757065727365637265746b6579796f7573686f756c646e6f74636f6d6d6974 \
        --timestamp 123206400 --payload "foo"

      $ branca decode \
        --key 73757065727365637265746b6579796f7573686f756c646e6f74636f6d6d6974 \
        --token 5XhVqpMx7WD7M0GXDAnATSDRqyH8HR0OHl2iBlqetVJoPh2hRauY8cDtJxwAVfrXy
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email tuupola@appelsiini.net instead of using the issue tracker.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.