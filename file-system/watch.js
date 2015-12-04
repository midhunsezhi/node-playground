"use strict";

const 
	fs = require('fs'),
	spawn = require('child_process').spawn,
	filename = process.argv[2];

if(!filename) {
	throw Error('A file name has to be provoded');
}

fs.watch(filename, function(){
	let
		ls = spawn('ls', ['-lh', filename]),
		output = '';
	ls.stdout.on('data', function(chunk){
		output += chunk.toString();
	});
	ls.on('close', function(){
		console.log(output);
	});
});

console.log('watching target file for changes...');