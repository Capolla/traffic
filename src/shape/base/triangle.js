import Shape from './shape'
import constant from '../../util/constant'

/**
 * 三角形
 */
class Triangle extends Shape {
  constructor (name = 'triangle', property = {}) {
    super(name, constant.SHAPE_TRIANGLE, Triangle.name, property)

    /**
     * x坐标列表：以顶点为起始，沿顺时针方向依次三个顶点的x坐标
     */
    this.xList = property['xList'] || [0, 0, 0]
    /**
     * y坐标列表：以顶点为起始，沿顺时针方向依次三个顶点的y坐标
     */
    this.yList = property['yList'] || [0, 0, 0]
  }

  /**
   * 更新三角形的属性
   *
   * @param {property} property
   * @override
   */
  set (property = {}) {
    super.set(this, property)

    this.xList = property['xList'] || [0, 0, 0]
    this.yList = property['yList'] || [0, 0, 0]
  }

  /**
   * draw triangle with html5 canvas
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
    canvas.fillStyle = this.color
    canvas.fill()
  }
}

export default Triangle
