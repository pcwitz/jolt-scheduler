'use strict';

const chalk = require('chalk');

module.exports = function() {
  console.log(`
    ${chalk.red.green.bold('clearing cache...')} [date: ${new Date()}]`);
};