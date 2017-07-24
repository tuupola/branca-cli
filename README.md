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