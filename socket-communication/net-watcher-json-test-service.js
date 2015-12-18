"use strict";

const
  net = require('net'),
  testServer = net.createServer(function(connection){
    console.log('subscriber connected');
    connection.write(
      '{"type":"changed","file":"targ'
    );
    
    let timer = setTimeout(function(){
      connection.write('et.txt","timestamp":1358175758495}' + "\n");
      connection.end();
    }, 1000);

    connection.on('end', function(){
      clearTimeout(timer);
      console.log('Subscriber disconnected');
    });
  });

testServer.listen(5432, function() {
  console.log('Test server listening for subscribers...');
});