new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 3,
    ok: true
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})