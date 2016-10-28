<template>
  <section>
    <h2>Hello from Greeting component!</h2>
    <p>
      This paragraph has scoped styles.
    </p>
    <p>
      What's your name?
      <input type="text" v-model="name">
    </p>
    <ul v-if="name">
      <li>{{englishGreeting}}</li>
      <li>{{spanishGreeting}}</li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        name: 'world'
      }
    },
    computed: {
      englishGreeting () {
        return `Hello ${this.name}`;
      },
      spanishGreeting () {
        return `Hola ${this.name}`;
      }
    }
  }
</script>

<style scoped>
  p:first-of-type {
    color: blue;
  }
</style>