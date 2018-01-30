'use strict';

module.exports = function AppError(message, extra) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.status = extra;
};

require('util').inherits(module.exports, Error);