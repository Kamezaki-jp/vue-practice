// コンポーネント
// Vue.component('ファイル名', {オブジェクト})
Vue.component('my-component', {
  // コンポーネントではdataを使う時に関数にする必要がある
  data: function() { 
    return {
      number: 12
    }
  },
  template: '<p>いいね({{number}})</p>'
})

new Vue({
	el: '#app',
})