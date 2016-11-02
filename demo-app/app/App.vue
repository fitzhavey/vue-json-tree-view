<template>
  <div>
    <header>
      <h1>Hello from App component!</h1>
      <p>
        This is an unstyled paragraph.
      </p>
    </header>
    <main>
      <greeting></greeting>
    </main>
  </div>
</template>

<script>
  import Greeting from '../../src/components/greeting/Greeting.vue';

  export default {
    components: {
      Greeting
    }
  };
</script>