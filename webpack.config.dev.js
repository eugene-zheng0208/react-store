import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
    ],
    output: {
        path: "/",
        publicPath: "/" 
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'react-hot','babel'],
                include: path.join(__dirname, 'client')
            },
            {
                test: /\.css$/,
                loader: 'style'
            },
            {
                test: /\.css$/,
                loader: 'css',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css']
    }/*,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'client')
            }
        ]
    },
    resolve: {
        extensions: ['.js', '*']
    }*/
}
