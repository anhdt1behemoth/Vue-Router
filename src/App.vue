<template>
  <div id="app">
    <AxiTest/>
  </div>
</template>

<script>
import AxiTest from './components/AxiTest.vue'

export default {
  name: 'App',
  components: {
    AxiTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
