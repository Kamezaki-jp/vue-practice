// できるだけ複数インスタンスは作らないほうが良い
// app1 app2のように独立しているときは使ってもいい
var vm1 = new Vue({
  el: '#app1',
  data: {
    message: 'インスタンス1'
  }
})

// インスタンスの外側から操作する
vm1.message = '書き換えられました。'

var vm2 = new Vue({
  el: '#app2',
  data: {
    message: 'インスタンス2'
  },
  methods: {
    changeMessage1: function() {
      vm1.message = 'インスタンス2から変更しました。'
    }
  }
})