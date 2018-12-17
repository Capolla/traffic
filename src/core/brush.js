import Rect from '../shap/rect'
import debug from 'debug'

const logger = debug('app:log')

/**
 * Brush画笔
 *
 * 对html5 canvas api的封装，负责traffic的绘制工作
 */
class Brush {
  constructor (canvasId) {
    /**
     * html5 canvas
     */
    this.canvas = document.getElementById(canvasId).getContext('2d')

    this.shapList = []
  }
  /**
   * 绘制图形
   * @param {Shap} shap
   */
  draw (shap) {
    logger('draw shap', shap)

    this.shapList.push(shap)

    if (shap instanceof Rect) {
      this.drawRect(shap)
    } else {
      logger('unkonw shap')
    }
  }
  /**
   * 绘制矩形
   * @param {Rect} rect
   */
  drawRect (rect) {
    logger('draw rect', rect)

    this.canvas.lineWidth = 30
    this.canvas.fillStyle = rect.color
    this.canvas.fillRect(rect.coorX, rect.coorY, rect.width, rect.height)
  }
}

export default Brush
