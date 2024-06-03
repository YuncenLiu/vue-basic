## 插槽

作用：让父组件可以向自子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于 父组件 ==> 子组件

分类：默认插槽、具名插槽、作用域插槽

1. 默认插槽

父组件

```html
<Category title="美食" :listData="foods">
    <img src="" alt="">
</Category>
```

子组件

```html
<template>
    <div>
        <!-- 定义插槽，等组件使用者进行填充,如果不填充按默认展示slot标签内容 -->
        <slot>插槽默认插入位置...</slot>
    </div>
</template>
```


2. 具名插槽

父组件

```html
<CategoryComponent title="美食">
    <img slot="center" src="" alt="">
    <a slot="footer" href="">内容</a>
</CategoryComponent>
```

子组件

```html
<template>
    <div>
        <slot name="center"></slot>
        <slot name="footer"></slot>
    </div>
</template>
```

3. 作用域插槽

数据在组件自身，但根据数据生成的结构需要组件的使用者来决定， 父组件传递结构给子组件，子组件通过约定好的参数，将数据返回给父组件，便于父亲组件的渲染，并且可以设置多个，注意父组件需要 `template` 标签

父组件

```html
<CategoryComponent title="游戏">
    <!--      必须使用 template 结构-->
    <template scope="demo">
        <ul>
            <li v-for="(item,index) in demo.games" :key="index">{{ item }}</li>
        </ul>
        <a class="foot" href="http://liuyuncen.com">{{demo.msg}}</a>
    </template>
</CategoryComponent>
```

子组件

```html
<template>
  <div>
    <slot :games="games" :msg="msg">
      默认内容
    </slot>
  </div>
</template>
```
