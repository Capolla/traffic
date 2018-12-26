import BaseClass from '../../core/base'

/**
 * traffic组件基类
 */
class Component extends BaseClass {
  constructor (className = Component.name, property = {}) {
    super(className)

    this.id = -1

    /**
     * 状态
     */
    this.status = property['status'] || 'normal'
    /**
     * 是否可用
     */
    this.active = property['active'] || true

    this.shape = 1
  }

  draw () {
    this.shape.draw()
  }
}

export default Component
