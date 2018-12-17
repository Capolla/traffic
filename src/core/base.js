import debug from 'debug'

/**
 * Base Class
 */
class BaseClass {
  constructor () {
    /**
     * application debug
     */
    this.debug = debug
    /**
     * application debug logger
     */
    this.logger = this.debug('app:log')
    /**
     * application error logger
     */
    this.error = this.debug('ERROR')
  }
}

export default BaseClass
