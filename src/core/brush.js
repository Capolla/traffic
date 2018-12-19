import BaseClass from './base'
import constant from '../util/constant'
import model from '../model/model'

/**
 * Brush画笔
 *
 * 对html5 canvas api的封装，负责traffic的绘制工作
 */
class Brush extends BaseClass {
  constructor (canvasId) {
    super(Brush.name)

    /**
     * 页面canvas标签dom
     */
    this.canvasDom = document.getElementById(canvasId)
    /**
     * html5 canvas
     */
    this.canvas = this.canvasDom.getContext('2d')

    model.set(constant.CANVAS, this.canvas)
  }

  /**
   * 绘制图形
   * @param {Shap} shap
   */
  draw (shap) {
    shap.draw(this.canvas)
  }

  /**
   * 绘制shapList
   */
  drawAll () {
    this.logger('--- draw all shap ---')
    this.canvas.clearRect(0, 0, this.canvasDom.width, this.canvasDom.height)

    var shapMap = model.get(constant.SHAPE_ALL)
    for (let key in shapMap) {
      let shape = shapMap[key]
      shape.draw(this.canvas)
    }
  }

  /**
   * 返回html5 canvas
   * @return {Canvas} canvas
   */
  h5Canvas () {
    return this.canvas
  }
}

export default Brush
