import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
