var path = require('path');
var APP_PATH = path.resolve(__dirname, 'app/main.js');
var BUILD_PATH = path.resolve(__dirname, 'build');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
    entry: APP_PATH,
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDom,
        }
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 50000,
                name: 'static/img/[name].[ext]?[hash:7]'
            }
        }],
        noParse: [pathToReact, pathToReactDom]
    }
}

module.exports = config;