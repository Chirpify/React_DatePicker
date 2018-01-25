
const path = require('path');

// devServer = {
//    contentBase: './src',
//    publicPath: '/output'
// };

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["./main.jsx"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./www",
    publicPath: "/output"
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["react", "es2015"] }
        }
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
