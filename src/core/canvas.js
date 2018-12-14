
/**
 * traffic html5 canvas class
 *
 * 对html5 canvas api的封装，负责traffic的绘制工作
 */
class Canvas {
  constructor (canvasId) {
    /**
     * html5 canvas
     */
    this.canvas = document.getElementById(canvasId).getContext('2d')
  }
}

export default Canvas
