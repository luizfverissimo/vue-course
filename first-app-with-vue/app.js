const app = new Vue({
  el: '#app',
  data() {
    return {
      goals: [],
      enteredValue: ''
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    }
  }
})