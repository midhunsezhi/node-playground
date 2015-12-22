"use strict";
const
  util = require('util'),
  events = require('events'),
  LDJClient = function(stream){
    events.EventEmitter.call(this); // this is roughly equivalent to calling this() in clasical OO languages
    let
      self = this,
      buffer = '';
    stream.on('data', function(data){
      buffer += data;
      let boundary = buffer.indexOf('\n');
      while (boundary !== -1) {
        let input = buffer.substr(0, boundary);
        buffer = buffer.substr(boundary + 1);
        self.emit('message', JSON.parse(input));
        boundary = buffer.indexOf('\n');
      }
    });
  };

util.inherits(LDJClient, events.EventEmitter);

exports.LDJClient = LDJClient
exports.connect = function(stream){
  return new LDJClient(stream);
}