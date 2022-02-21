const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './client/src'),
    output: {
      path: path.resolve(__dirname, './client/dist'),
      filename: 'bundle.js',
    },
    watch: true,
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-transform-react-jsx'
              ]
            }
          }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
      ]
    }
  };