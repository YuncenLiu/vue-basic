## WebStorage

1. 存储内容大小一般支持 5MB 左右，不同浏览器可能还不一样
2. 浏览器通过 `Windows.sessionStorage` 和 `Window.localStorage` 属性来实现本次存储机制
3. 相关 API
```js
    let p = {name:'张三',age:18}
    // 保存
    localStorage.setItem('msg',JSON.stringify(p))
    // 读取
    const jsonP = localStorage.getItem('msg')
    // 删除
    localStorage.removeItem('msg')
    // 清空所有
    localStorage.clear()
```
4. `SessionStroage` 存储的内容会随着浏览器窗口关闭而消失
5. `LocalStroage` 存储内容，需要手动清除才会消失
6. `xxxxStrogae.getItem(xxx)` 如果对应value找不到，返回的是 `null`
7. `JSON.parse(null)` 返回依旧是 `null`