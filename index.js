#!/usr/bin/env node

"use strict";
const meow = require("meow");
const branca = require("branca");

const cli = meow(`
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
`, {
	alias: {
		k: "key",
		n: "nonce",
		p: "payload",
		t: "timestamp",
	}
});

if ("encode" === cli.input[0]) {
	const branca = require("branca")(cli.flags.key);
	const token = branca.encode(cli.flags.payload, cli.flags.timestamp);
    console.log(token);
	process.exit(0);
};

if ("decode" === cli.input[0]) {
    const branca = require("branca")(cli.flags.key);
    let payload = null;
	try {
		payload = branca.decode(cli.flags.token, cli.flags.ttl);
	} catch (exception) {
        console.log(exception.message || "Invalid token.");
        process.exit(1);
	}
    console.log(payload.toString());
    process.exit(0);
};

console.log(cli.help, "\n");
process.exit(1);
