// const transform_romove_plugin = require('babel-plugin-transform-remove-console')
// const productPlugins = []
// if (process.env.NODE_ENV === 'production') {
//   productPlugins.push(transform_romove_plugin)
// }

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
      // ...productPlugins
      '@babel/plugin-syntax-dynamic-import'
  ]
}
