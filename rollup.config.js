import babel from 'rollup-plugin-babel'

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
    babel({
      exclude: 'node_modules/**' // babel仅仅编译项目的源码
    })
  ]
}))
