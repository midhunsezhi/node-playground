"use strict";
const
  cluster = require('cluster'),
  zmq = require('zmq'),
  fs = require('fs');

if(cluster.isMaster) {
  let
    router = zmq.socket('router').bind('tcp://*:5433'),
    dealer = zmq.socket('dealer').bind('ipc://dealer.ipc');

  router.on('message', function(){
    let frames = Array.prototype.slice.call(arguments);
    dealer.send(frames);
  });

  dealer.on('message', function(){
    let frames = Array.prototype.slice.call(arguments);
    router.send(frames);
  });

  cluster.on('online', function(worker){
    console.log('cluster ' + worker.process.pid + ' is online');
  });

  for (let i=0; i<3; i++){
    cluster.fork();
  }
} else {
  let responder = zmq.socket('rep').connect('ipc://dealer.ipc');

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

}