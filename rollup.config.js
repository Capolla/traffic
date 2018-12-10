/**
 * Created by Captain on 2018/12/6 14:38.
 */
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

  ]
}))
