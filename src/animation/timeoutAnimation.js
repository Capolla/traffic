// import BaseClass from '../core/base'

// /**
//  * timeout动画控制类
//  */
// class TimeoutAnimation extends BaseClass {
//   constructor (callback, frame) {
//     super(TimeoutAnimation.name)

//     /**
//      * 动画暂停
//      */
//     this.animationPause = false
//     /**
//      * 用户定义的动画内容
//      */
//     this.callback = undefined

//     this._init()
//   }

//   /**
//    * 使用浏览器动画循环接口播放动画
//    *
//    * @param {callback} callback
//    */
//   play (callback = this.callback) {
//     this.callback = callback
//     let self = this
//     function animate (time) {
//       if (!self.animationPause) {
//         callback()
//         window.requestNextAnimationFrame(animate)
//       }
//     }

//     window.requestNextAnimationFrame(animate)
//   }

//   /**
//    * 暂停浏览器动画播放
//    */
//   pause () {
//     this.logger('animation pause')
//     this.animationPause = true
//   }

//   /**
//    * 开始浏览器动画播放
//    */
//   start () {
//     this.logger('animation start')
//     this.animationPause = false
//     this.play()
//   }
// }

// export default TimeoutAnimation
