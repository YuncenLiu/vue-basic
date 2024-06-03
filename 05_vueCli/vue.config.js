const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "从 Vue.config.js 中配置的标题",
        },
    },
    // 方式一:这种方式无法控制多个代理对象，只能使用一个端口，并且会优先选择 public 目录下的资源作为返回值，不会真正调用代理服务
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }
    // 方式二:
    devServer: {
        proxy: {
            '/stu': {
                target: 'http://localhost:5002',
                pathRewrite: {'^/stu':''},
                // 用于支持 websocket
                ws: true,
                // 欺骗服务端我来自哪里,服务端是多少端口,我就欺骗它多少端口, 用于控制请求头的 host
                // 不写默认为 true
                changeOrigin: true
            },
            '/car': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/car':''}
            }
        }
    }
});
