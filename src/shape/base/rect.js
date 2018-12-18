import Shape from './shape'
import constant from '../../util/constant'

/**
 * 矩形
 */
class Rect extends Shape {
  constructor (name = 'rect', property = {}) {
    super(name, constant.SHAPE_RECT, Rect.name)

    /**
     * 宽
     */
    this.width = property['width'] || 0
    /**
     * 高
     */
    this.height = property['height'] || 0

    this.color = property['color'] || '#000000'
    this.coorX = property['coorX'] || 0
    this.coorY = property['coorY'] || 0
  }

  /**
   * draw rect with html5 canvas
   *
   * @param {Canvas} canvas
   * @override
   */
  draw (canvas) {
    super.draw(this)

    canvas.lineWidth = 30
    canvas.fillStyle = this.color
    canvas.fillRect(this.coorX, this.coorY, this.width, this.height)
  }
}

export default Rect
