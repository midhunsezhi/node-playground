"use strict";

const
  net = require('net'),
  client = net.connect({port : 5432});

client.on('data', function(data){
  let message = JSON.parse(data);
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

