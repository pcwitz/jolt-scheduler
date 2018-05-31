'use strict';

const chalk = require('chalk');

module.exports = function() {
  console.log(`
    ${chalk.yellow.bold('sending email...')} [date: ${new Date()}]`);
};