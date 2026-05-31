import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}
