import Shape from './shape'
import constant from '../../util/constant'

/**
 * 菱形
 */
class Diamond extends Shape {
  constructor (name = 'diamond', property = {}) {
    super(name, constant.SHAPE_DIAMOND, Diamond.name, property)

    /**
     * 宽
     */
    this.width = property['width'] || 0
    /**
     * 高
     */
    this.height = property['height'] || 0

    /**
     * x坐标列表：以顶点为起始，沿顺时针方向依次四个顶点的x坐标
     */
    this.xList = [this.coorX, (this.coorX + this.width * 1.0 / 2), this.coorX, (this.coorX - this.width * 1.0 / 2)]
    /**
     * y坐标列表：以顶点为起始，沿顺时针方向依次四个顶点的y坐标
     */
    this.yList = [(this.coorY - this.height * 1.0 / 2), this.coorY, (this.coorY + this.height * 1.0 / 2), this.coorY]

    super.register(this)
  }

  /**
   * 更新菱形的属性
   *
   * @param {property} property
   * @override
   */
  set (property = {}) {
    super.set(this, property)

    this.width = property['width'] || this.width
    this.height = property['height'] || this.height

    this.xList = [this.coorX, (this.coorX + this.width * 1.0 / 2), this.coorX, (this.coorX - this.width * 1.0 / 2)]
    this.yList = [(this.coorY - this.height * 1.0 / 2), this.coorY, (this.coorY + this.height * 1.0 / 2), this.coorY]
  }

  /**
   * draw diamond with html5 canvas
   *
   * @param {Canvas} canvas
   * @override
   */
  draw (canvas) {
    super.draw(this)

    canvas.beginPath()
    canvas.moveTo(this.xList[0], this.yList[0])
    canvas.lineTo(this.xList[1], this.yList[1])
    canvas.lineTo(this.xList[2], this.yList[2])
    canvas.lineTo(this.xList[3], this.yList[3])
    canvas.fillStyle = this.color
    canvas.fill()
  }
}

export default Diamond
