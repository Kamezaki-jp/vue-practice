// コンポーネント（ローカル登録）
var component = {
  data: function() {
    return {
      number: 12
    }
  },
  template: '<p>いいね({{number}})<button @click="increment">+1</button></p>',
  methods: {
    increment: function() {
      this.number += 1;
    }
  }
}

// コンポーネント(グローバル登録)
// Vue.component('ファイル名', {オブジェクト})
// Vue.component('my-component', {
  // コンポーネントではdataを使う時に関数にする必要がある
//   data: function() { 
//     return {
//       number: 12
//     }
//   },
//   template: '<p>いいね({{number}})<button @click="increment">+1</button></p>',
//   methods: {
//     increment: function() {
//       this.number += 1;
//     }
//   }
// })

new Vue({
	el: '#app',
  // ローカル登録
  components: {
    // 'ファイル名' : 値（変数名）
    'my-component': component
  }
})

new Vue({
	el: '#app2',
})