// できるだけ複数インスタンスは作らないほうが良い
// app1 app2のように独立しているときは使ってもいい
new Vue({
  el: '#app1',
  data: {
    message: 'インスタンス1'
  }
})

new Vue({
  el: '#app2',
  data: {
    message: 'インスタンス2'
  }
})