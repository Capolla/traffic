import Rect from '../shap/rect'
import Canvas from './canvas'

class Traffic {
  constructor (banner) {
    /**
     * traffic banner
     */
    this.BANNER = banner
    /**
     * rect
     */
    this.Rect = Rect
    /**
     * rect list
     */
    this.rectList = []
    /**
     * html5 canvas
     */
    this.Canvas = Canvas
    /**
     * application model
     */
    this.model = {}
  }

  init () {

  }

  /**
   * print message
   */
  print () {
    console.log('[BANNER]', this.BANNER)
    console.log('[rect list]', this.rectList)
  }

  getModel () {
    return this.model
  }

  setModel (model) {
    this.model = model
  }

  /**
   * print rect list
   * @param {rect object} rect
   */
  addRect (rect) {
    this.rectList.push(rect)
  }
}

export default Traffic
