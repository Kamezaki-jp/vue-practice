new Vue ({
  el: '#app',
  data: {
    number: 0,
    event: 'click',
    x: 0,
    y: 0,
  },
  methods: {
    countUp: function() {
      this.number += 1;
    },
    changeMousePosition: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    noEvent: function(event) {
      // デフォルトの挙動を動作させない
      event.preventDefault();
    },
    myAlert() {
      alert('Alert!');
    }
  }
})