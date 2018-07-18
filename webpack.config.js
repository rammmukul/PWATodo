const browserConfig = {
  entry: './view/index.js',
  output: {
    path: __dirname,
    filename: './public/scripts/index.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['react-app'] }
      }
    ]
  }
}

module.exports = [browserConfig]
