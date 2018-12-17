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
    super()

    /**
     * html5 canvas
     */
    this.canvas = document.getElementById(canvasId).getContext('2d')
  }
  /**
   * 绘制图形
   * @param {Shap} shap
   */
  draw (shap) {
    var shapeAllList = model.get(constant.SHAPE_ALL)
    shapeAllList.push(shap)
    model.set(constant.SHAPE_ALL, shapeAllList)

    this.logger('draw shap', shap)
    shap.draw(this.canvas)
  }

  /**
   * 绘制shapList
   */
  drawAll () {
    this.logger('--- draw all shap ---')

    var shapeAllList = model.get(constant.SHAPE_ALL)
    shapeAllList.array.forEach(shap => {
      shap.draw(this.canvas)
    })
  }

  /**
   * 返回html5 canvas
   * @return {Canvas} canvas
   */
  h5Canvas () {
    return this.canvas
  }
  // /**
  //  * 绘制矩形
  //  * @param {Rect} rect
  //  */
  // drawRect (rect) {
  //   this.logger('draw rect', rect)

  //   this.canvas.lineWidth = 30
  //   this.canvas.fillStyle = rect.color
  //   this.canvas.fillRect(rect.coorX, rect.coorY, rect.width, rect.height)
  // }
}

export default Brush
