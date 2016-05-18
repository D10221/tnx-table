module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            "node_modules/lodash/lodash.js",
            "node_modules/rx/dist/rx.all.js",
            //'built/bundle.js',
            'built/tests.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
