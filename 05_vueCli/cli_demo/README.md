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