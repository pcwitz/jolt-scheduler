'use strict';

const chalk = require('chalk');

module.exports = function() {
  console.log(`
    ${chalk.blue.bold('your room is ready...')} [date: ${new Date()}]`);
};