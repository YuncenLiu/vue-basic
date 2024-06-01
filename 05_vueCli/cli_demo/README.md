# VueCLi 笔记

## ref 属性

代码路径path: `02_src_ref`

1. 被用来给元素或子组件组册引用信息（id的替代者）
2. 应用在 html 标签上获取的是真实 dom 元素，应用在组件标签上的是组件实例对象（vc）
3. 使用方式
   1. 标识： `<h1 ref="xxx"></h1>`
   2. 获取： `this.$refs.xxx`


## Prop 配置项 

代码路径path: `03_src_prop`

功能：让组件接收外部传来的数据

1. 传递数据：
   ```
   <Demo name="xxx"/>
   ```
2. 接收数据
   1. 只接收形式 : `props:['name']`
   2. 限制类型：
      ```
      props:{
         name:Number
      }
      ```
   3. 限制类型、限制必要性、指定默认值
   ```
   props:{
      name:{
         type: String
         required: true // 必要性
         default: 'xxx' // 默认值
      }
   }
   ```
props 是只读的，Vue底层会监测你对 props 的修改，如果进行修改，就会发出警告，但是也会修改，若业务中一定要修改，把数据传递到 data 中，再在data中修改

## mixin 混入

功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：
1. 定义混入
   ```
   data(){...}
   methods:{...}
   ```
2. 使用混入
   1. 全局混入：`Vue.mixin(xxx)`
   2. 局部混入：`mixins:['xxx']`

> 需要注意的是，如果混入和本地文件同时存在 方法名、变量 相同，则优先使用本地方法、变量
> 但存在生命周期在混入 和 本地方法中同时出现时，两者都会触发，且混入的触发在前面

## plugins 插件

用于增强 Vue

本质包括 `install` 方法的一个对象,`install` 的第一个参数是 Vue,第二个以后就是插件自定义参数

定义插件
```
对象.install = function(Vue, option){
   Vue.filter(...){} // 全局过滤器

   Vue.directive(...){} // 全局自定义指令

   Vue.mixin(...){} // 全局混入

   Vue.prototype.$myMethod = function(){...}
   Vue.prototype.$myProerty = xxx
}
```

使用插件： `Vue.use(xxx)`


## less-loader 插件问题

查看 webpack 版本 `npm view webpack versions`

查看 less-loader 版本 `npm view less-loader versions`

遇到安装 less-loader 失败的情况
```
npm i less-loader
```
报错了，那可能是当前的Vue脚手架webpack的版本，和当前最新less-loader 版本不兼容导致，通过 `npm i less-loader` 会将最新的 `less-loader` 安装进来，但是，`webpack 5`以上的版本才兼容目前最新的，`webpack 5` 以下只能使用 less-loader 7 版本


指定版本安装，7 表示 7 的最高版本
```
npm -i less-loader@7
```

安装完成之后这样使用
```
<style lang="less" scoped>
```
如果不写，默认使用 `css` 样式

## scoped 样式

作用：让样式在布局生效，防止冲突
写法：`<styole scoped></styole>`


## 总结 TodoList 案例

1. 组件化编程流程
   1. 拆分静态组件：组件要按功能进行拆分，命名不要与 html 元素冲突
   2. 实现动态组件：考虑好数据存放位置，数据是应该组件在用，还是一些在用
      1. 一个在用，放在组件自身
      2. 一些组件在用，放在他们共同父组件上
   3. 实现交互，从绑定事件开始
2. props 适用于
   1. 父组件 -> 子组件通信
   2. 子组建 -> 父组件通信（要求父组件先给子一个函数）
3. 使用 v-model 时要切记，v-model 绑定的指不能是 props 传过来的指，因为 props 是不可以修改的
4. props 传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样使用

## 组件的自定义事件 子往父组件传递

1. 一种组件通信方式,适用于 子组件 ===> 父组件
2. 使用场景: 子想给父组件传数据,就要在父组件设置回调函数
3. 绑定自定义事件
   1. 在父组件中 `<Demo @sendMsg="send"/>` 或者 `<Demo v-on:sendMsg="send"/>`
   2. 在父组件中
   ```
   <Demo ref="send"/>
   ...
   mounted(){
      this.$refs.send.$on('sendMsg',this.send)
   }
   ```
   3. 若想要自定义事件只触发一次,可以使用 once 修饰符,或者在方法将 $on 替换为 $once
4. 触发自定义事件: `this.$emit('send',...params)`
5. 解绑自定义事件: `this.$off('send')`
6. 组件上也可以绑定原生 DOM 事件,需要使用 native 修饰符
7. 注意: 通过 `this.$refs.xxx.$on('sendMsg',function(xxx)=>{})` 绑定自定义事件时,回调要么配置在 methods 中,要么用箭头函数,否则 this 会出现指向问题

## 全局事件总线(GlobalEventBus)

1. 一种组件问题通信方式，适用于任意组件间通信
2. 安装全局事件总线
   ```js
   new Vue({
      el:'#app',
      render: h => h(App),
      beforeCreate(){
         Vue.prototype.$bus = this
      }
   })
   ```
3. 使用事件总线
   1. 接收数据，调用谁，写在谁组件中
   ```js
   mounted(){
      this.$bus.$on('hello',(data)=>{
         console.log('我是 Edu 组件,收到了数据',data)
      })
   },
   ```
   2. 谁要调用，谁去拿总线
   ```js
   this.$bus.$emit('hello',this.name)
   ```
   
4. 最好在 beforeDestory 钩子中，用 $off 去解绑当`前组件所用到`的事件
   ```js
   beforeDestroy(){
      this.$bus.$off('hello')
   }
   ```


问题1: 为什么要在全局事件总线上写解绑？

不解绑他一直在事件总线上