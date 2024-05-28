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

### 计算属性

1. 定义：要用的属性不存在，要通过已有属性计算得来
2. 原理：底层借助了 Object.defineproperty 方法提供的 getter 和 setter
3. get 函数什么时候执行？
   1. 初次读取时会执行一次
   2. 当依赖的数据发生改变时会被再次调用
4. 优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便
5. 备注
   1. 计算属性最终会出现在 vm 上，直接读取使用即可
   2. 如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据

```html
<span>{{computedFullName}}</span> <br /><br />
<span>{{simpleFulName}}</span> <br /><br />
```

```js
computed: {
    computedFullName: {
        get() {
            console.log("computedFullName get 被调用了")
            return this.firstName + ' - ' + this.lastName
        },
        // 当数据被修改时，将会调用 set 方法
        set(value){
            console.log("computedFullName set 方法被调用了:",value)
            const arr = value.split('-')
            this.firstName = arr[0]
            this.lastName = arr[1]
        }
    },
    simpleFulName:function(){
        console.log("simpleFulName get 被调用了")
        return this.firstName + ' - ' + this.lastName
    }
}
```

### 深度监听

如果被监听数据是一个对象

```js
person: {
    height: 180,
    weight: 70
}
```
检测对象中的具体属性，例如监测 `hegiht` 
```js
watch: {
    'person.height'': {...}}
```
如果检查 `person` 对象是否改变结构，比如增加了一个节点 `name`
```js
watch: {
    person: {...}}
```
不考虑 `deep` 和 `immediate` 情况简写
```js
watch: {
    person(n,o){...}}
```
配置项写法
```js
vm.$watch('person',{...})
```

总结：
1. Vue中的watch默认不监测对象内部值的改变（一层）
2. 配置 `deep:true` 可以监测对象内布置改变（多层）
3. Vue 自身可以监测对象内布置多改变，但是Vue提供的watch默认不行
4. 使用watch时根据数据具体结构，决定是否采用深度监测

#### 监视实现计算属性

虽然可以通过监听实现计算属性，通过在 `data` 中定义，监视修改后使用命令式的修改。官网更推荐计算属性

> 同样的需求，使用更少量的代码，肯定是更好的！

假设存在这样需求，在改变数据后，1秒之后再修改数据，这样只能使用watch 监听，也就是说，监听可以更好的实现异步

computed 和 watch 之间的区别
1. computed 能完成的， watch 都可以完成
2. watch 能完成的，computed 不一定可以，例如 watch 可以异步操作

两个重要的原则
1. 所被 Vue 管理的函数，最好写成普通函数，这样 this 才是指向  vm 或组件实例对象
2. 所有不被 vue 所管理的函数（定时器的回调函数、ajax的回调函数等），最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象

## 样式绑定

使用 `v-bind` 、 `:` 对已经确定、未确定的样式进行绑定

## 条件渲染

v-show 和 v-if 区别
1. show 的原理是将对象添加属性的方式隐藏对象 display:none 
2. if 的原理是直接把 dom 干掉

既然有 `v-if` 还有 `v-else-if` 、 `v-else` 连续的这些不能被打断

注意：`<template>` 标签只能和 `v-if` 配合，不能使用 `v-show`

使用 `v-if` 时，元素可能无法获取到，但是 `v-show` 一定可以获取到，因为对象还是存在在dom节点里的。