/**
 * Bud loader for coz.
 * @module coz-bud-loader
 * @version 3.0.3
 */

'use strict'


const BudLoader = require('./bud_loader')

function budLoader(config){
  return new BudLoader(config)
}

budLoader.budLoader = budLoader

module.exports = budLoader
