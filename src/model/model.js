import constant from '../util/constant'
import debug from 'debug'

var logger = debug('app:log')
var error = debug('ERROR')

/**
 * traffic model
 */
var traffic
/**
 * HTML5 canvas api
 */
var canvas
/**
 * shape list
 */
var shapeAllList = []
/**
 * context model map
 */
var modelMap = {}

// --- model init start ---
modelMap[constant.TRAFFIC] = traffic
modelMap[constant.CANVAS] = canvas
modelMap[constant.SHAPE_ALL] = shapeAllList
// --- model init end ---

var model = {

  get: function (name) {
    if (typeof name === 'undefined' || name === '') {
      error('name is empty!')
      return undefined
    }
    return modelMap[name]
  },

  set: function (name, model) {
    if (typeof name === 'undefined' || name === '') {
      error('name is empty!')
      return
    }
    if (typeof model === 'undefined') {
      error('model is undefined!')
    }
    modelMap[name] = model
  },

  print: function () {
    logger('model_map:', modelMap)
  }

}

export default model
