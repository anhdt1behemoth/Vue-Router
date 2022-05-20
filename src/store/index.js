import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Datas: [
      {
        id: 1,
        title: 'Nguyen Van A'
      },
      {
        id: 2,
        title: 'Tran Van B'
      }
    ]
  },
  getters: {
    allDatas: state => state.Datas
  },
  mutations: {
    setDatas: (state, Datas) => (state.Datas = Datas)
  },
  actions: {
    async fetchDatas ({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setDatas', response.data)
    }
  },
  modules: {
  }
})
