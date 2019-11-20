var webpackConfig = require("./webpack.config.js");
webpackConfig.entry = () => ({});
webpackConfig.output = {
    filename: "[name].js",
};
const testFileGlob = "**/*_test.ts";

module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],
        browsers: ["ChromeHeadless"],
        colors: true,
        concurrency: Infinity,
        port: 9081, // DEFAULT: 9081
        files: [
            "node_modules/babel-polyfill/dist/polyfill.js",
            {
                pattern: testFileGlob,
                watched: false,
            },
        ],
        preprocessors: {
            [testFileGlob]: ["webpack"],
        },
        webpack: {
            ...webpackConfig,
            optimization: undefined,
        },
        webpackMiddleware: {
            stats: "errors-only",
        },
    });
};
