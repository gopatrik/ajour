#!/usr/bin/env node

"use strict";

var fs = require('fs');
var minimist = require('minimist');

// Douglas Crockford Object creation style
var Ajour = function () {
	// get argumentents
	var argv = minimist(process.argv.slice(2), {boolean: 't'});

	// include timestamp unless -t flag set
	var timestamp = argv.t ? "" : '\n# ' + new Date() +'\n';

	// join the _ argument string
	var message = argv._.join(' ') + '\n';

	// join atoms into final entry string
	var entry = timestamp + message;

	var manual = function () {
		return "\tType\n\t$ ajour <your entry>\n \tto create an entry.";
	};

	var write = function () {
		if(argv._.length > 0){
			fs.appendFile('ajour.md', entry, function(err) {
			    if(err) {
			        console.log(err);
			    } else {
			        console.log('ajour.md << ' + entry);
			    }
			}); 
		}else{
			console.log("Error: No message specified\n",manual());
		}
	};

	return Object.freeze({
		write: write
	});
};

var a = Ajour();
a.write();



