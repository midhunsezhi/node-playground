"use strict";

const
  ldj = require('./ldj.js'),
  net = require('net'),
  netClient = net.connect({port : 5432}),
  client = ldj.connect(netClient);

client.on('message', function(message){
  if(message.type == 'watching'){
    console.log('now watching ' + message.file + '\n');
  }
  else if(message.type == 'changed'){
    let date = new Date(message.timestamp);
    console.log(message.file + " changed at " + date +'\n');
  }
  else {
    throw Error('unrecognized type ' + message.type);
  }
});

