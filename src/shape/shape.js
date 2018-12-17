import BaseClass from '../core/base'

/**
 * Shape base class
 *
 * traffic中所有形状的基类
 */
class Shape extends BaseClass {
  constructor (name = 'shpe', type) {
    super()
    /**
     * id
     */
    this.index = -1
    /**
     * 名称
     */
    this.name = name
    /**
     * 横坐标
     */
    this.coorX = 0
    /**
     * 纵坐标
     */
    this.coorY = 0
    /**
     * 状态
     */
    this.status = 'normal'
    /**
     * 是否可用
     */
    this.isActive = true
    /**
     * 类型
     */
    this.type = type
    /**
     * 颜色
     */
    this.color = '#000000'
    /**
     * 引用index
     */
    this.refIndex = -1
  }
}

export default Shape
