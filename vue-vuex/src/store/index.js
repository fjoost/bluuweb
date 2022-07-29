import { createStore } from 'vuex'

export default createStore({
  // igual a data:
  // siempre los state van a ir en computed
  // spreed operator javascript: accede al objeto state
  // siempre se van a mapear en los computed
  state: {
    contador: 50
  },
  getters: {
  },
  mutations: {
    incrementar(state) {
      state.contador = state.contador + 10
    },
    decrecer(state) {
      state.contador = state.contador - 10
    }
  },
  actions: {
    // defino el nombre de mi Action, se le pasa el parametro commmit (documentacion)
    // el valor del commit será el nombre de mi Mutations incremetar -> incrementar
    accionIncremento({ commit }) {
      commit('incrementar')
    },
    accionDecrecimiento({ commit }) {
      commit('decrecer')
    }
  },
  modules: {
  }
})
