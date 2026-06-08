import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

export default {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        port: 8082,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes: {
                "./CartShow": "./src/index.js"
            },
            shared: ["@faker-js/faker"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
