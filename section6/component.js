// コンポーネント
// Vue.component('ファイル名', {オブジェクト})
Vue.component('my-component', {
  // コンポーネントではdataを使う時に関数にする必要がある
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
})

new Vue({
	el: '#app',
})