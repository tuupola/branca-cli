```
Command line tool for creating and inspecting Branca API tokens.

  Usage
    $ branca <command> <options>

  Commands
       encode, decode

     Options
       --key, -k <key>              Secret key as a string
       --nonce, -n <nonce>          Nonce as string
       --payload, -p <payload>      Token payload as a string
       --timestamp, -t <timestamp>  UNIX timestamp

       --token <token>              Base62 encoded token
       --ttl <ttl>                  TTL for decoding

  Examples
  	$ branca encode --key <key> --payload <payload>
  	$ branca decode --key <key> --token <token>
  	$ branca decode --key <key> --token <token> --ttl <ttl>
```