new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  },
  methods: {
    sayHi() {
      this.message = 'Hello VueJS'
      return 'Hi'
    }
  }
})