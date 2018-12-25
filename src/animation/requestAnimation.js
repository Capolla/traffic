import BaseClass from '../core/base'

/**
 * 浏览器动画实现类
 */
class RequestAnimation extends BaseClass {
  constructor (callback = {}) {
    super(RequestAnimation.name)

    /**
     * 动画暂停
     */
    this.animationPause = true
    /**
     * 用户定义的动画内容
     */
    this.callback = callback
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
        window.requestNextAnimationFrame(animate)
      }
    }
    window.requestNextAnimationFrame(animate)
  }

  /**
   * 暂停浏览器动画播放
   */
  pause () {
    this.logger('request animation pause:', this)
    this.animationPause = true
  }

  /**
   * 开始浏览器动画播放
   */
  start () {
    this.logger('request animation start:', this)
    this.animationPause = false
    this.play()
  }
}

export default RequestAnimation
