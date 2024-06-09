const express = require('express')
const history = require('connect-history-api-fallback')

const PORT = 8089
const app = express()

// 应用history必须在调用 express.static 之前
app.use(history)
app.use(express.static(__dirname + '/static'))

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',age: 18
    })
})

app.listen(PORT,(err)=>{
    if(!err) console.log(`${PORT} 服务启动`)
})