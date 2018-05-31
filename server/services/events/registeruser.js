'use strict';

module.exports = function(event, cb) {
  if (event.name !== 'registerUser') {
    return cb(new Error(`Service unavailable. Expected a registration event and received request for ${event.name}`));
  } else {
    event.start = new Date();
    return cb(null, event);
  }
};