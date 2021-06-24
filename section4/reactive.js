var vm = new Vue({
  el: '#app',
  data: {
    message: 'こんにちは'
  }
})

vm.message = '変えました。'

// この方法ではgetter setterが動かないからリアクティブにならない
vm.name = 'よしぴー'

console.log(vm);