import BaseClass from '../../core/base'
import util from '../../util/util'

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
    this.index = util.uuid()
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
   * 更新Shape属性
   *
   * @param {Shape} shape
   */
  set (shape, property = {}) {
    this.logger('update shape property', shape)

    this.coorX = property['coorX'] || 0
    this.coorY = property['coorY'] || 0
    this.status = property['status'] || 'normal'
    this.active = property['active'] || true
    this.color = property['color'] || '#000000'
    this.refIndex = property['refIndex'] || -1
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
