const express = require('express');
const app = express();
const PORT = 5001;

// 定义路由
app.get('/cars', (req, res) => {
    // 返回 JSON 对象
    res.json([
        {'id':"001",'name':'奔驰','price':199},
        {'id':"002",'name':'奇瑞','price':80},
        {'id':"003",'name':'大众','price':130},
        {'id':"004",'name':'宝马','price':180},
    ]);
    // 控制台打印一句话
    console.log('Cars 5001 Received a request for /cars');
});

// 监听端口
app.listen(PORT, () => {
    console.log(`Cars Server is running on port ${PORT}`);
});
