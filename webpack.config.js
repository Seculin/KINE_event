//webpack.config.js

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack')

module.exports = function(env) {
    return {
        entry: "./js/main.js",
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
                {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader", exclude: /node_modules/},
                {test: /\.less$/, loader: "style-loader!css-loader!less-loader", exclude: /node_modules/},
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'},
                {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
            ]
        },
        plugins: debug ? [] : [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        ],
    }
}