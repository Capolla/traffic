import Traffic from './core/traffic'
import model from './model/model'
import constant from './util/constant'
import debug from 'debug'

/**
 * @version 1.0.0
 * @author Xiangyu Du
 *
 * 项目入口文件
 *
 * 构造traffic实体并将其导出
 */

const log = debug('app:log')
// The logger should only be disabled if we’re not in production
if (ENV !== 'production') {
  // Enable the logger
  debug.enable('*')
  log('Logging is enabled!')
} else {
  // Disable the logger
  debug.disable()
}

var traffic = new Traffic('traffic.js@XiangyuDu')

model.set(constant.TRAFFIC, traffic)
traffic.setModel(model)

log('--- traffic construct successfully! ---')

export default traffic
