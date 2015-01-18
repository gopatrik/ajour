#!/usr/bin/env node

"use strict";

var fs = require('fs');
var minimist = require('minimist');


// Douglas Crockford Object instantiation style
var Ajour = function () {
	// get argumentents
	var argv = minimist(process.argv.slice(2));

	// include timestamp unless -t flag set
	var timestamp = argv.t ? "" : '\n# ' + new Date() +'\n';

	// join the _ argument string
	var entry = argv._.join(' ') + '\n';

	var entry = timestamp + entry;

	var write = function () {
		fs.appendFile('ajour.md', entry, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log('The file was saved!');
		    }
		}); 
	};

	return Object.freeze({
		write: write
	});
}


var a = Ajour();
a.write();



