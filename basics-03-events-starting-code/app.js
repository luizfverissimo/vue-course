const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    }
  },
  methods: {
    addCount(num) {
      const newCount = this.counter + num
      this.counter = newCount
    },
    reduceCount(num) {
      const newCount = this.counter - num
      this.counter = newCount
    },
    setName(event) {
      this.name = event.target.value
    },
    confirmedInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted')
    }
  }
})

app.mount('#events')
