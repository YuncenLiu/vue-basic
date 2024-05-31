export default {
  install(Vue) {
    console.log("install 插件", Vue);

    // 过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 3);
    });

    // 自定义指令
    Vue.directive("fbind", {
      // 当指令与元素成功绑定时（一上来）
      bind(element, binding) {
        // 此处的 this 是 windows
        console.log("bigNumber", this);
        console.log("bind");
        element.value = binding.value;
      },
      // 指令所在元素被插入页面时
      inserted(element, binding) {
        console.log("inserted");
        element.focus();
      },
      // 指令所在模版被重新解析时
      update(element, binding) {
        console.log("update");
        element.focus();
        element.value = binding.value;
      },
    });

    // 自定义混入
    Vue.mixin({
      methods: {
        showName() {
          alert(this.name);
        },
      },
      mounted() {
        console.log("mounted - mixin");
      },
    })

    Vue.prototype.hello = ()=>{
        alert('你好啊')
    }
  },
};
