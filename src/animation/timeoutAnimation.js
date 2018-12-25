import BaseClass from '../core/base'
import model from '../model/model'
import constant from '../util/constant'

/**
 * timeout动画实现类
 */
class TimeoutAnimation extends BaseClass {
  constructor (callback = {}, frame = 60) {
    super(TimeoutAnimation.name)

    /**
     * timeout 动画帧率 fps
     */
    this.frame = frame
    /**
     * 动画暂停
     */
    this.animationPause = true
    /**
     * 用户定义的动画内容
     */
    this.callback = callback
    model.set(constant.ANIMATION_FRAME, frame)
  }

  /**
   * 循环动画
   * @param {time} time
   */
  play (time) {
    let self = this
    function animate (time) {
      if (!self.animationPause) {
        self.callback()

        var start, finish
        window.setTimeout(function () {
          start = +new Date()
          animate(start)
          finish = +new Date()
          self.timeout = 1000 / self.frame - (finish - start)
        }, self.timeout)
      }
    }
    animate()
  }

  /**
   * 暂停timeout动画播放
   */
  pause () {
    this.logger('timeout animation pause:', this)
    this.animationPause = true
  }

  /**
   * 开始timeout动画播放
   */
  start () {
    this.logger('timeout animation start:', this)
    this.animationPause = false
    this.play()
  }
}

export default TimeoutAnimation
