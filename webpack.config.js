var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // use resolve instead of join
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    // GET ERROR cause the contentBase is the .html file instead of bundle.js
    // https://stackoverflow.com/questions/37954809/cannot-get-error-running-hello-world-in-webpack
    port: 8085
  }
};
