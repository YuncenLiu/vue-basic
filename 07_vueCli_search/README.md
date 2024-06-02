## GitHub Search 案例


```shell
npm i vue-resource
```

引入

```js
import vueResource from 'vue-resource'

Vue.use(vueResource)
```

通过引入后，所有的 `vueComponent` 组件都会有一个 `$http` 属性，此时就可以通过 `$http` 获取请求

```js
this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    response =>{
        console.log('请求成功了')
        this.$bus.$emit('updateListData',{users:response.data.items,isLoading:false,errMsg:''})
    },
    error => {
        console.log('请求失败了',error.message)
        this.$bus.$emit('updateListData',{users:[],isLoading:false,errMsg:error.message})
    }
)
```