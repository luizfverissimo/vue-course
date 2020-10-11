const app = new Vue({
  el: '#user-goal',
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing Apps!',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if(randomNumber < 0.5){
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
})
