const app = new Vue({
  el: '#assignment',
  data() {
    return {
      userInput: '',
      userInput2: '',
      confirmedInput: ''
    }
  },
  methods: {
    buttonAlert() {
      alert('Botão foi pressionado')
    },
    input(e) {
      this.userInput = e.target.value
    },
    input2(e) {
      this.userInput2 = e.target.value
    },
    confirmInput() {
      this.confirmedInput = this.userInput2
    }
  }
})