import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container;

export default {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                products: "products@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
