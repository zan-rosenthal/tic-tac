var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './client/index.jsx'
  ],
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:{
        presets:[ 'es2015', 'react', 'stage-2']
      }
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path:path.join( __dirname, '/dist'),
    publicPath:'/',
    filename: 'bundle.js'
  },

};
