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
 * context model map
 */
var modelMap = {}
/**
 * all shape map
 */
var shapeMap = {}
/**
 * timeout动画帧率，默认为60fps
 */
var animationFrame = 60

// --- model init start ---
modelMap[constant.TRAFFIC] = traffic
modelMap[constant.CANVAS] = canvas
modelMap[constant.SHAPE_ALL] = shapeMap
modelMap[constant.ANIMATION_FRAME] = animationFrame
// --- model init end ---

var model = {

  get: function (name) {
    if (typeof name === 'undefined' || name === '') {
      error('name is empty!')
      throw new Error('name is empty!')
    }
    return modelMap[name]
  },

  set: function (name, model) {
    if (typeof name === 'undefined' || name === '') {
      error('name is empty!')
      throw new Error('name is empty!')
    }
    if (typeof model === 'undefined') {
      error('model is undefined!')
      throw new Error('model is undefined!')
    }
    modelMap[name] = model
  },

  /**
   * 添加shape
   *
   * @param {Shape} shape
   */
  addShape: function (shape) {
    if (typeof shape === 'undefined' || !shape['index']) {
      error('cannot add undefined or empty shape!')
      throw new Error('cannot add undefined or empty shape!')
    }
    shapeMap[shape.index] = shape
    modelMap[constant.SHAPE_ALL] = shapeMap
    this.print()
  },

  /**
   * 删除指定的Shape
   *
   * @param {Shape} shape
   */
  removeShape: function (shape) {
    if (typeof shape === 'undefined' || !shape['index']) {
      error('cannot remove undefined or empty shape!')
      throw new Error('cannot remove undefined or empty shape!')
    }
    delete shapeMap[shape.index]
    modelMap[constant.SHAPE_ALL] = shapeMap
    this.print()
  },

  /**
   * 根据index获取shape
   *
   * @param {index} index
   */
  getShape: function (index) {
    if (typeof index === 'undefined' || index === '') {
      error('index is undefined or empty!')
      throw new Error('index is undefined or empty!')
    }
    return shapeMap[index]
  },

  print: function () {
    logger('model_map:', modelMap)
  }
}

export default model
