function createMailing4HotelMixinLib (execlib) {
  'use strict';

  var mylib = {};

  mylib.Service = require('./servicecreator')(execlib);

  return mylib;
}
module.exports = createMailing4HotelMixinLib;
