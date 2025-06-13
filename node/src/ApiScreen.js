const express = require('express');
const app = express();
const PORT = 8904;
const path = "/webScreenshot"

// 记录访问路径的中间件
app.use((req, res, next) => {
    console.log(`请求的资源是: ${req.url}`);
    console.log('请求来自于',req.get('Host'));
    next();
});

// 定义路由
app.get(path, (req, res) => {
    // 返回 JSON 对象
    res.json(
        {"status":400,"msg":"fail","data":["https://mpushpre.kunlunhealth.com.cn/cp/20240805_112012A18021B4D6924F0280F8A361C6D21859.pngpreview_0.png"]}
    );
    // 控制台打印一句话
});

// 监听端口
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and url is http://localhost:${PORT}${path}`);
});
