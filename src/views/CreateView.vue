<template>
  <div>
      <h3>Create Data </h3>
      <div class="add">
          <form @submit="onSubmit">
              <input type="text" v-model="title" placeholder="add Data...">
              <input type="submit" value="Submit">
          </form>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateView',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['createDatas']),
    onSubmit (e) {
      e.preventDafault()
      this.createDatas(this.title)
    }
  }
}
</script>

<style>

</style>
