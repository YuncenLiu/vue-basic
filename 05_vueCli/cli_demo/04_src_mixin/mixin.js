export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted(){
    console.log('mounted - mixin');
  }
};

export const datas = {
    data(){
        return{
            x: 100,
        }
    }
}