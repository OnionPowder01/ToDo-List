const { NONAME } = require('dns');
const path = require('path');

module.exports = 
{ 
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
         {
          test: /\.(scss)$/,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
        ],
      },
        
};