import Shap from './shap'

/**
 * Rect class
 */
class Rect extends Shap {
  constructor (name) {
    super()
    this.type = 'rect'
    this.name = name
  }
}

export default Rect
