//WRANING: relative from project root
module.exports = {
    entry: './example/index.ts',
    output: {
        filename: './example/built/index.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};
