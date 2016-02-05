"use strict";

const
  zmq = require('zmq'),
  requester = zmq.socket('req'),
  filename = process.argv[2];

requester.on('message', function(data){
  let response = JSON.parse(data);
  console.log(response);
});

requester.connect('tcp://localhost:5433');
console.log('sending request for ' + filename)
requester.send(JSON.stringify({
  path: filename
}));