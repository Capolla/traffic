import Rect from '../shap/rect'
import Brush from './brush'

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
    // /**
    //  * rect list
    //  */
    // this.rectList = []
    /**
     * traffic brush
     */
    this.Brush = Brush
    /**
     * application model
     */
    this.model = {}
  }

  init () {

  }

  /**
   * print traffic message
   */
  print () {
    console.log('[BANNER]', this.BANNER)
    // console.log('[rect list]', this.rectList)
  }

  getModel () {
    return this.model
  }

  setModel (model) {
    this.model = model
  }

  // /**
  //  * print rect list
  //  * @param {rect object} rect
  //  */
  // addRect (rect) {
  //   this.rectList.push(rect)
  // }
}

export default Traffic
