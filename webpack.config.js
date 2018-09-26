import path from 'path';
import webpack from 'webpack';
import config from './Generator-Test.Gulp/config';

export default {
    entry: {
        'Generator-Test': [`${config.js.src}/Generator-Test/index.js`]
    },
    output: {
        path: path.resolve(__dirname, config.js.dest),
        publicPath: `${config.js.dest.replace(config.baseDir, '')}/`,
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    devtool: global.production ? 'source-maps' : 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'Generator-Test.vendor',
            minChunks: module => module.context && module.context.includes('node_modules')
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery'
        }),
        ...global.production ? [new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            extractComments: true
        })] : []
    ]
};
