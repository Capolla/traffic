import Rect from './shap/rect'

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
  }
  /**
   * print message
   */
  print () {
    console.log('[BANNER]', this.BANNER)
    // console.log('[rect]', this.Rect)
    console.log('[rect list]', this.rectList)
  }

  /**
   * print rect list
   * @param {rect object} rect
   */
  addRect (rect) {
    this.rectList.push(rect)
  }
}

var traffic = new Traffic('traffic.js@Capolla')

export default traffic
