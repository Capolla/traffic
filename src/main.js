import Traffic from './core/traffic'
import model from './model/model'
import constant from './util/constant'
import debug from 'debug'

/**
 * @version 1.0.0
 * @author Xiangyu Du<dxy_hnyd@163.com>
 *
 * 项目入口文件
 *
 * 构造traffic实体并将其导出
 */

const logger = debug('app:log')
// The logger should only be disabled if we’re not in production
if (ENV !== 'production') {
  // Enable the logger
  debug.enable('*')
  logger('Logging is enabled!')
} else {
  // Disable the logger
  debug.disable()
}

var traffic = new Traffic()

model.set(constant.TRAFFIC, traffic)
traffic.setModel(model)

logger('--- traffic construct successfully! ---')

export default traffic
