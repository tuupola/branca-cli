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
    --payload, -p <payload>       Token payload as a string
    --timestamp, -t <timestamp>   UNIX timestamp

    --token <token>               Base62 encoded token
    --ttl <ttl>                   TTL for decoding

Examples
    $ branca encode --key supersecretkeyyoushouldnotcommit \\
      --timestamp 123206400 --payload "foo"

    $ branca decode --key supersecretkeyyoushouldnotcommit \\
      --token 5XhVqpMx7WD7M0GXDAnATSDRqyH8HR0OHl2iBlqetVJoPh2hRauY8cDtJxwAVfrXy
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

    let payload = cli.flags.payload;
    if (payload.toString().startsWith("0x")) {
        payload = Buffer.from(payload.substring(2), "hex");
    };

	const token = branca.encode(payload, cli.flags.timestamp);
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
