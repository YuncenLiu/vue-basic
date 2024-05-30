# VueCLi 笔记

## ref 属性
1. 被用来给元素或子组件组册引用信息（id的替代者）
2. 应用在 html 标签上获取的是真实 dom 元素，应用在组件标签上的是组件实例对象（vc）
3. 使用方式
   1. 标识： `<h1 ref="xxx"></h1>`
   2. 获取： `this.$refs.xxx`


## 配置项 

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