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
    setDatas: (state, Datas) => (state.Datas = Datas),
    newDatas: (state, Data) => state.Datas.unshift(Data)
  },
  actions: {
    async fetchDatas ({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setDatas', response.data)
    },
    async createDatas ({ commit, title }) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
      commit('newDatas', response.data)
    }
  },
  modules: {
  }
})
