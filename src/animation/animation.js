import BaseClass from '../core/base'
import RequestAnimation from './requestAnimation'
import util from '../util/util'
import TimeoutAnimation from './timeoutAnimation'

/**
 * 浏览器动画控制类
 */
class Animation extends BaseClass {
  constructor () {
    super(Animation.name)

    this._init()
  }

  /**
   * 初始化浏览器循环动画接口
   */
  _init () {
    window.requestNextAnimationFrame =
      (function () {
        var wrapper
        var self = this
        var originWebKitMethod
        var index
        var userAgent = navigator.userAgent
        var geckoVersion = 0

        // 浏览器环境为Chrome 10
        // Workaround for Chrome 10 bug where Chrome does not pass the time to the animation function
        if (window.webkitRequestAnimationFrame) {
          // 定义wrapper来避免Chrome 10调用回调函数时，未传递time的bug
          wrapper = function (time) {
            if (time === undefined) {
              time = +new Date()
            }
            self.callback(time)
          }

          // Make the switch
          originWebKitMethod = window.webkitRequestAnimationFrame

          window.webkitRequestAnimationFrame = function (callback, element) {
            self.callback = callback
            // Browser calls wrapper; wrapper calls callback
            originWebKitMethod(wrapper, element)
          }
        }

        // 浏览器环境为FireFox 4.0, 将动画实现重定义为undefined, 以为了后续采用setTimeout来替代实现
        // Workaround for Gecko 2.0, which has a bug in mozRequestAnimationFrame() that restricts animations to 30-40 fps
        // Gecko 2.0 corresponds to Firefox 4.0
        if (window.mozRequestAnimationFrame) {
          index = userAgent.indexOf('rv:')
          if (userAgent.indexOf('Gecko') !== -1) {
            geckoVersion = userAgent.substr(index + 3, 3)

            if (geckoVersion === '2.0') {
              window.mozRequestAnimationFrame = undefined
            }
          }
        }

        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback, element) {
            // 采用setTimeout方法来模拟实现动画，默认为60fps
            var start, finish
            window.setTimeout(function () {
              start = +new Date()
              callback(start)
              finish = +new Date()

              self.timeout = 1000 / 60 - (finish - start)
            }, self.timeout)
          }
      })()
  }

  /**
   * 构造浏览器动画
   * @param {callback} callback
   */
  requestAnimation (callback) {
    if (util.functionEmpty(callback)) {
      this.error('callback is undefined or its not function!')
      throw new Error('callback is undefined or its not function!')
    }
    return new RequestAnimation(callback)
  }

  /**
   * 构造timeout动画
   * @param {callback} callback
   */
  timeoutAnimation (callback, frame) {
    if (util.functionEmpty(callback)) {
      this.error('callback is undefined or not function!')
      throw new Error('callback is undefined or not function!')
    }
    if (typeof frame !== 'number' || frame <= 0 || frame > 120) {
      this.error('frame is illegal!')
      throw new Error('frame is illegal!')
    }
    return new TimeoutAnimation(callback, frame)
  }

  /**
   * 暂停浏览器动画播放
   */
  play (animation) {
    animation.start()
  }

  /**
   * 开始浏览器动画播放
   */
  pause (animation) {
    animation.pause()
  }
}

export default Animation
