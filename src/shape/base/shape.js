import BaseClass from '../../core/base'

/**
 * Shape base class
 *
 * traffic中所有形状的基类
 */
class Shape extends BaseClass {
  constructor (name = 'shpe', type, className = '', property = {}) {
    super(className)
    /**
     * id
     */
    this.index = -1
    /**
     * 名称
     */
    this.name = name
    /**
     * 类型
     */
    this.type = type
    /**
     * 横坐标
     */
    this.coorX = property['coorX'] || 0
    /**
     * 纵坐标
     */
    this.coorY = property['coorY'] || 0
    /**
     * 状态
     */
    this.status = property['status'] || 'normal'
    /**
     * 是否可用
     */
    this.active = property['active'] || true
    /**
     * 颜色
     */
    this.color = property['color'] || '#000000'
    /**
     * 引用index
     */
    this.refIndex = property['refIndex'] || -1
  }

  /**
   * update the shape property
   *
   * @param {Shape} shape
   */
  set (shape) {
    this.logger('update shape property', shape)
  }

  /**
   * 绘制Shape
   *
   * @param {Shape} shape
   */
  draw (shape) {
    this.logger('draw shape', shape)
  }
}

export default Shape
