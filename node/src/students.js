const express = require('express');
const app = express();
const PORT = 5000;

// 定义路由
app.get('/students', (req, res) => {
    // 返回 JSON 对象
    res.json([
        {'id':"001",'name':'tom','age':21},
        {'id':"002",'name':'jerry','age':20},
        {'id':"003",'name':'anti','age':23},
        {'id':"004",'name':'torry','age':19}
    ]);
    // 控制台打印一句话
    console.log('Students 5000 Received a request for /student');
});

// 监听端口
app.listen(PORT, () => {
    console.log(`Students Server is running on port ${PORT}`);
});
