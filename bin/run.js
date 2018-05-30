'use strict';

const service = require('../server/service');
const http = require('http');

// server stuff...
const server = http.createServer(service);
server.listen(3030);

server.on('listening', function() {
  console.log(`
    JOLT-scheduler is listening on ${server.address().port} in ${service.get('env')} mode.`);
});