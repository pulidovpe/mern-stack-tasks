const path = require('path');
//const webpack = require('webpack');

module.exports = {
   entry: './src/app/index.jsx',
   output: {
      path: path.resolve('./src/public'), //resolver el path de salida
      filename: 'bundle.js' // archivo js compilado
   },
   module: {
      rules: [{         
         use: 'babel-loader',
         test: /.jsx?$/,
         exclude: /node_modules/
      }]
   } 
};