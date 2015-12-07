'use strict';

const
  fs = require('fs'),
  net = require('net'),
  filename = process.argv[2],

  server = net.createServer(function(connection){
    console.log('subscriber connected!');
    connection.write("Now watching " + filename + " for changes \n");

    let watcher = fs.watch(filename, function(){
      connection.write(filename + " changed! \n");
    });

    connection.on('close', function(){
      console.log('subscriber disconnected!');
      watcher.close();
    });
  });

  if(!filename){
    console.log('Could not find the file');
  }

  server.listen(5432, function(){
    console.log('Listening for subscribers .. ');
  })

