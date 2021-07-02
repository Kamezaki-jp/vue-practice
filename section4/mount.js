var data = {
  message: 'こんにちは',
  name: 'よしぴー'
}

var vm = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})

// el: プロパティの代わりになる
vm.$mount('#app')

new Vue({
  // el: '#app2',
  data: {
    name: 'よしぴー'
  },
  template: '<h1>こんにちは、{{name}}</h1>'
}).$mount('#app2')

new Vue({
  data: {
    name: 'よしぴー'
  },
  render: function(createElement) {
    return createElement('h1', 'こんにちは、' + this.name);
  },
}).$mount('#app3')

var dir = document.createElement('div');
console.log(dir);

new Vue({
  el: '#app4',
  data: {
    name: 'よしぴー'
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  methods: {
    destroy: function() {
      this.$destroy()
    }
  }
})