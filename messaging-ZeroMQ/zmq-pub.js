"use strict";
const
  zmq = require('zmq'),
  fs = require('fs'),

  publisher = zmq.socket('pub'),
  filename = process.argv[2];

fs.watch(filename, function() {
  publisher.send(JSON.stringify({
    type: 'changed',
    file: filename,
    timestamp: Date.now()
  })); 
});

publisher.bind('tcp://*:5432', function(){
  console.log('listening for subscribers');
});