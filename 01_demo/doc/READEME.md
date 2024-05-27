## 开发效率

在 VScdoe 工具中创建代码片段快捷键
辅助地址：
```
https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode
```

## 键盘技术

date:2024-05-27

> 通过键盘技术，可以监听页面的 Ctrl+S \ Ctrl+C \ Ctrl+V 操作，然后相对应的进行控制

1. Vue中常用的按键别名：
   1. 回车 Enter
   2. 删格 delete
   3. 退出 esc
   4. 空格 space
   5. 换行 tab
   6. 上 up
   7. 下 down
   8. 左 left
   9. 右 right
2.  Vue未提供别名的按键，可以使用按键原始 key 值去绑定，但注意要转为 kebab-case 短横线命名
3.  系统修饰符（用法特色）crtl、alt、shfit、meta
    1.  配合 keyup 使用，按下修饰健同时再按其他键，随后释放其他键，事件才触发
    2.  配合 keydown 使用，正常触发事件
4.  也可以使用 keyCode 去指定具体按键（不推荐）
5.  Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```html
 <div id="root">
        {{name}}
        <hr />
        <input type="text" placeholder="按下回车打印内容" @keyup.enter="showInfo"> 
        <hr/>
        <input type="text" placeholder="按下键盘输出内容" @keyup="showKeyNameAndCode"> 
        <li>@keyupdown.tab 切走，并且触发 keyupdown 当失去焦点时触发</li>
        <li>@keyup.caps-lock 原本名字是 CapsLock 必须这样改</li>
    </div>
```

```js
methods: {
            showInfo(e) {
                // if (e.keyCode !== 13) return // 可以不用亲自回车，可以使用别名
                console.log(e.target.value)
                // 并且同时清空
                e.target.value = ''
            },
            showKeyNameAndCode(e){
                console.log(e.key,e.keyCode)
            }
        }
```

## 计算属性与监听

