const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry:"./src/index.ts",

    output:{
        path:path.resolve("./dist"),
        filename:"script/bundle.js"
    },
    module:{
        rules:[
            {
                test:/.ts$/,
                use:{
                    loader:"ts-loader",
                    options:{
                        transpileOnly:true
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ],
    resolve:{
        extensions:[".ts",".js"]
    }
}