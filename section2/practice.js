new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 3,
    ok: true
  },
  methods: {
    sayHi: function() {
      // インスタンス内で自分のインスタンスのプロパティにアクセスするときはthisをつける
      return this.message;
    }
  }
})