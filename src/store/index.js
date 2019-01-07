import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const citiy = localStorage.citiy || '广州'
const state = {
  citiy: citiy
}
const actions = {}
const mutations = {
  changeCitiy (state, val) {
    localStorage.citiy = val
    state.citiy = localStorage.citiy
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
