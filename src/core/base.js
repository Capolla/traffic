import debug from 'debug'

/**
 * Base Class
 */
class BaseClass {
  constructor (className = '') {
    /**
     * application debug
     */
    this.debug = debug
    /**
     * application debug logger
     */
    this.logger = this.debug('app:log:' + className)
    /**
     * application error logger
     */
    this.error = this.debug('ERROR:' + className)
  }
}

export default BaseClass
