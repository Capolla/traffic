import Rect from '../shape/rect'
import Brush from './brush'
import BaseClass from './base'

/**
 * Traffic
 */
class Traffic extends BaseClass {
  constructor () {
    super(Traffic.name)
    /**
     * traffic banner
     */
    this.BANNER = 'traffic.js@XiangyuDu'
    /**
     * rect
     */
    this.Rect = Rect
    /**
     * traffic brush
     */
    this.Brush = Brush
    /**
     * application model
     */
    this._model = {}
  }

  /**
   * 初始化Traffic
   */
  init () {
    this.logger('traffic init')
  }

  /**
   * print traffic message
   */
  print () {
    console.log('[BANNER]', this.BANNER)
    // console.log('[rect list]', this.rectList)
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
