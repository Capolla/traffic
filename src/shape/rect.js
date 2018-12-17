import Shape from './shape'
import constant from '../util/constant'

/**
 * Rect class
 */
class Rect extends Shape {
  constructor (name = 'rect', property = {}) {
    super(name, constant.SHAPE_RECT)
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

  /**
   * draw with html5 canvas
   * @param {Canvas} canvas
   */
  draw (canvas) {
    this.logger('draw rect', this)

    canvas.lineWidth = 30
    canvas.fillStyle = this.color
    canvas.fillRect(this.coorX, this.coorY, this.width, this.height)
  }
}

export default Rect
