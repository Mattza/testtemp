const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        polyfill: "babel-polyfill",
        app: "./app.ts",
    },
    watch: false,
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.js$/, //Regular expression
                exclude: /(node_modules|bower_components|Scripts)/, //excluded node_modules
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "babel-preset-env",
                                    {
                                        targets: {
                                            browsers: [
                                                "Chrome >= 52",
                                                "FireFox >= 44",
                                                "Safari >= 7",
                                                "Explorer 11",
                                                "last 4 Edge versions",
                                            ],
                                        },
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        port: 9000,
    },
};
