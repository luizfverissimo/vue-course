const app = new Vue({
  el: '#assignment',
  data() {
    return {
      name: 'Luiz Fernando Veríssimo',
      age: 31,
      imgUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=80&w=120'
    }
  },
  methods: {
    randomNumber() {
      const randomNum = Math.random()
      return randomNum
    }
  }
})