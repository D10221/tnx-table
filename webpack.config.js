module.exports = {
    entry: './src/tnx-table.ts',
    output: {
        filename: './dist/tnx-table.js',
        library: "tnx-table",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    ts:{
        compilerOptions:{
            "declaration": true,
            "outDir": "dist"

        }
    }
};
