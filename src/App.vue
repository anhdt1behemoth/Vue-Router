<template>
  <div id="app">
    <CreateView/>
    <AxiTest/>
   </div>
</template>
<script>
import AxiTest from '../src/views/AxiTest.vue'
import CreateView from './views/CreateView.vue'
export default {
  name: 'App',
  components: {
    AxiTest,
    CreateView
  }
}
</script>
<style>
</style>
