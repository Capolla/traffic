import Rect from '../shape/base/rect'
import Brush from './brush'
import BaseClass from './base'
import Circle from '../shape/base/circle'
import Triangle from '../shape/base/triangle'
import Diamond from '../shape/base/diamond'
import constant from '../util/constant'

/**
 * Traffic
 */
class Traffic extends BaseClass {
  constructor () {
    super(Traffic.name)

    this.BANNER = 'traffic.js@XiangyuDu'

    // --- 基础形状 start ---

    /**
     * 矩形
     */
    this.Rect = Rect
    /**
     * 圆形
     */
    this.Circle = Circle
    /**
     * 三角形
     */
    this.Triangle = Triangle
    /**
     * 菱形
     */
    this.Diamond = Diamond

    // --- 基础形状 end ---

    /**
     * 画笔
     */
    this.Brush = Brush
    /**
     * application model
     */
    this._model = {}

    this._init()
  }

  /**
   * 初始化Traffic
   */
  _init () {
    this.logger('traffic init')
  }

  /**
   * print traffic message
   */
  print () {
    console.log('[BANNER]', this.BANNER)
  }

  /**
   * 返回浏览器动画控制类
   */
  animation () {
    return this._model.get(constant.ANIMATION)
  }

  getModel () {
    if (typeof this._model === 'undefined') {
      this.error('traffic model is undefined!')
      this._model = {}
    }
    return this._model
  }

  setModel (model) {
    if (typeof model === 'undefined') {
      this.error('cannot set model to undefined!')
      throw new Error('cannot set model to undefined!')
    }
    this._model = model
  }
}

export default Traffic
