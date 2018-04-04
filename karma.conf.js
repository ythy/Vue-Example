var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({

         // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: [
            '_test_/**/*.ts'
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.{ts,tsx}': [ 'webpack' ], // Using karma-webpack npm module
            '_test_/**/*.{ts,tsx}': [ 'webpack' ]
        },
        
        webpack: {
          module: webpackConfig.module,
          resolve: webpackConfig.resolve,
          plugins: webpackConfig.plugins
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["dots"],

        browsers: ["Chrome"],

         // web server port
        port: 9176,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

    });
};
