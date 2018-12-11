import constant from '../util/constant'

/**
 * traffic model
 */
var traffic
/**
 * HTML5 canvas api
 */
var canvas
/**
 * context model map
 */
var modelMap = {}
modelMap[constant.TRAFFIC] = traffic
modelMap[constant.CANVAS] = canvas

var model = {

  get: function (name) {
    if (typeof name === 'undefined' || name === '') {
      return undefined
    }
    return modelMap[name]
  },

  set: function (name, model) {
    if (typeof name !== 'undefined' && name !== '' && typeof model !== 'undefined') {
      modelMap[name] = model
    }
  }

}

export default model
