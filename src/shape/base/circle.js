import Shape from './shape'
import constant from '../../util/constant'

/**
 * 圆形
 */
class Circle extends Shape {
  constructor (name = 'circle', property = {}) {
    super(name, constant.SHAPE_CIRCLE, Circle.name)

    /**
     * 半径
     */
    this.radius = property['radius'] || 0

    this.color = property['color'] || '#000000'
    this.coorX = property['coorX'] || 0
    this.coorY = property['coorY'] || 0
  }

  /**
   * draw circle with html5 canvas
   *
   * @param {Canvas} canvas
   * @override
   */
  draw (canvas) {
    super.draw(this)

    canvas.beginPath()
    canvas.fillStyle = this.color
    canvas.arc(this.coorX, this.coorY, this.radius, 0, Math.PI * 2)
    canvas.fill()
  }
}

export default Circle
