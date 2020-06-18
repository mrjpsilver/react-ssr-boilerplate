var ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },{
          test: /\.s[ac]ss$/i,
          use: extractPlugin.extract({
            use:[
              // Translate CSS into CommonJS
              'css-loader',
              // Compile sass to CSS
              'sass-loader',
            ]
          })
          
        }
    ],
  },
  plugins:[
    extractPlugin
  ]
}
