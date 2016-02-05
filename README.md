#Node Playground

This repo showcases various functionalities of node. Each folder shows a particular section of it.

### file-system

* [watch.js] 
 - deal with file i/o. 
 - make use of EventEmitter, stream, ChildProcess and Buffer.
 - write asynchronous call-back functions and coding for event-loop.

* [file-access.js] 
 - read and write to file 
 - handle read and write streams
 - synchronous file acess
 - error handling


### socket-communication

* [basic-tcp-server]
 - set up a basic tcp socket (useful for communication between networked  computers)
 - working with connection object to get the information from server to client

* [net-watcher-json-client.js, net-watcher-json-service.js, net-watcher-json-test-service.js]
 - create a basic client server app which communicates using JSON messaging protocol
 - write a test service to check the server in case of broken messages

* [ldj.js]
 - write a custom Node module and extend Node core classes, including EventEmitter
 - develop a LDJ(Line delimitted JSON) module to process the incoming broken data chunks 
 - emit a single JSON message to the client

### messaging-ZeroMQ

* [zmq-pub.js, zmq-sub.js]
 - a simple tcp messaging illustration using PUB/SUB pattern

* [zmq-rep.js, zmq-req.js]
 - responding to request using REQ/REP pattern

* [zmq-cluster-rep.js, zmq-req.js]
 - responding to multiple requests by using cluster module.
 - load balancing between multiple clusters using DEALER and ROUTER sockets of zmq.
