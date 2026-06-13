import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

export default {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        port: 8081,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductsIndex": "./src/bootstrap.js"
            },
            shared: ["@faker-js/faker"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
