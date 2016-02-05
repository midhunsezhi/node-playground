"use strict";

const
  fs = require('fs'),
  zmq = require('zmq'),

  responder = zmq.socket('rep');

responder.on('message', function(data){
  let request = JSON.parse(data);
  console.log('got request for '+ request.path);

  fs.readFile(request.path, function(err,data){
    console.log('sending response content from process '+ process.pid);
    responder.send(JSON.stringify({
      content: data.toString(),
      pid: process.pid
    }));
  });
});

responder.bind('tcp://*:5433', function(err){
  console.log('listening for requests');
});

//close the responder when the node process ends

process.on('SIGINT', function() {
  console.log('Shutting down...');
  responder.close();
});