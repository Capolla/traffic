import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

export default [
  {
    file: 'dist/traffic.cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/traffic.esm.js',
    format: 'esm'
  }, {
    file: 'dist/traffic.umd.js',
    format: 'umd',
    name: 'traffic'
  }, {
    file: 'dist/traffic.amd.js',
    format: 'amd'
  }, {
    file: 'dist/traffic.iife.js',
    format: 'iife',
    name: 'traffic'
  }
].map(output => ({
  input: 'src/main.js',
  output,
  plugins: [
    // rollup-plugin-node-resolve 插件使rollup允许加载node_modules中的第三方模块
    resolve({
      jsnext: true, // 将 Node 包转换为 ES2015 模块
      main: true,
      browser: true
    }),
    // rollup-plugin-commonjs 插件会将CommonJS模块转换为ES6,使得rollup打包兼容
    commonjs(),
    babel({
      exclude: 'node_modules/**' // babel仅仅编译项目的源码
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development') // 更换全局变量ENV的值
    })
  ]
}))
