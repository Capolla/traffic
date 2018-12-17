import Shap from './shap'
import constant from '../util/constant'

/**
 * Rect class
 */
class Rect extends Shap {
  constructor (name = 'rect', property = {}) {
    super(name, constant.RECT)
    /**
     * 宽
     */
    this.width = 0
    /**
     * 高
     */
    this.height = 0

    this.color = property['color'] || '#000000'
    this.coorX = property['coorX'] || 0
    this.coorY = property['coorY'] || 0
    this.width = property['width'] || 0
    this.height = property['height'] || 0
  }
}

export default Rect
