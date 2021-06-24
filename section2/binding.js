new Vue({
  el: '#app',
  data: {
    isActive: true,
    color: 'red',
    bg: 'bg-blue'
  },
  computed: {
    // computedを用いてオブジェクトを返す
    classObject: function() {
      return { 
        // dataにアクセスするときはthisを使う
        red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
  }
})