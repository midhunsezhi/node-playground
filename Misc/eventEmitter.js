"use strict";

var eventEmitter = function() {
    this.events = {};
}

eventEmitter.prototype.on = function(event, listener) {
    var thisEmitter = this;
    this.events[event] = this.events[event] || [];

    this.events[event].push(listener);

    return {
        off: function() {
            var listenerIndex = thisEmitter.events[event].indexOf(listener);
            thisEmitter.events[event].splice(listenerIndex, 1);
        }
    }
}

eventEmitter.prototype.emit = function(event) {
    var args = [].slice.call(arguments, 1),
        i, length, listener;

    if(Array.isArray(this.events[event])) {
        length = this.events[event].length;
        for(i = 0; i < length; i++) {
            listener = this.events[event][i];
            listener.apply(this, args);
        }
    }
}

var emitter = new eventEmitter();

var subscriber = emitter.on('ping', console.log);
emitter.emit('ping', 'hello there');
console.log(emitter.events);
subscriber.off();
console.log(emitter.events);