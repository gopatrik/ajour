#!/usr/bin/env node

"use strict";

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

// console.dir(argv);


// include timestamp unless -t flag set
var timestamp = argv.t ? "" : '\n# ' + new Date() +'\n';

// join the _ argument string
var entry = argv._.join(' ') + '\n';

var entry = timestamp + entry;

fs.appendFile('ajour.md', entry, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('The file was saved!');
    }
}); 