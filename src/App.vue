<template>
  <div id="app">
    <button @click="$router.params.push('/createData')">Create</button>
    <AxiTest/>
   </div>
</template>
<script>
import AxiTest from '../src/views/AxiTest.vue'
export default {
  name: 'App',
  components: {
    AxiTest
  }
}
</script>
<style>
 .btn{
 }
</style>
