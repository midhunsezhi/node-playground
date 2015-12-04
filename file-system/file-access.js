"strict mode";

const 
	fs = require('fs'),
	stream = fs.createReadStream(process.argv[2]);

fs.readFile(process.argv[2], function(err, data){
	if(err){
		throw err;
	}
	console.log(data.toString());
});

const data = fs.readFileSync(process.argv[2]);
process.stdout.write(data);

stream.on('data', function(chunk){
	process.stdout.write(chunk);
});

stream.on('error', function(err){
	process.stderr.write('Error! ' + er.message + '\n');
});