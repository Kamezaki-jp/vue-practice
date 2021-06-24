new Vue({
  el: '#app',
  data: {
    fruits: ['りんご','バナナ', 'ぶどう'],
    object: {
      firstName: '太郎',
      lastName: '田中',
      age: 15
    }
  },
  methods: {
    remove: function() {
      // .shift 先頭を削除する
      this.fruits.shift()
    }
  }
})