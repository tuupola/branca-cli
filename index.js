#!/usr/bin/env node

"use strict";
const meow = require("meow");
const branca = require("branca");

const cli = meow(`
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
    $ branca encode --key supersecretkeyyoushouldnotcommit \\
      --nonce 0x0102030405060708090a0b0c0102030405060708090a0b0c \\
      --timestamp 123206400 --payload "foo"

    $ branca decode --key supersecretkeyyoushouldnotcommit \\
      --nonce 0x0102030405060708090a0b0c0102030405060708090a0b0c \\
      --token 5XhVqpMwNYFFQyukAbfLz0TiQEVFQn8wDYZDmcSHFIeTNQ7zUW2n2CeZUpB1p22hA
`,
{
    alias: {
        k: "key",
        n: "nonce",
        p: "payload",
        t: "timestamp"
    },
    string: ["key", "nonce", "payload"]
});


if ("encode" === cli.input[0]) {
    let key = cli.flags.key;
    if (key.toString().startsWith("0x")) {
        key = Buffer.from(key.substring(2), "hex");
    };

    const branca = require("branca")(cli.flags.key);

    let nonce = cli.flags.nonce;
    if (nonce.toString().startsWith("0x")) {
        nonce = Buffer.from(nonce.substring(2), "hex");
    };

    let payload = cli.flags.payload;
    if (payload.toString().startsWith("0x")) {
        payload = Buffer.from(payload.substring(2), "hex");
    };

	const token = branca.encode(payload, cli.flags.timestamp, nonce);
    console.log(token);
	process.exit(0);
};

if ("decode" === cli.input[0]) {
    let key = cli.flags.key;
    if (key.toString().startsWith("0x")) {
        key = Buffer.from(key.substring(2), "hex");
    };

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
