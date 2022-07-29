import { createStore } from 'vuex'

export default createStore({
  // igual a data:
  // siempre los state van a ir en computed
  // spreed operator javascript: accede al objeto state
  // siempre se van a mapear en los computed
  state: {
    contador: 100
  },
  getters: {
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    decrecer(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: {
    // defino el nombre de mi Action, se le pasa el parametro commmit (documentacion)
    // el valor del commit será el nombre de mi Mutations incremetar -> incrementar
    //el commit ejecuta mutaciones
    accionIncremento({ commit }) {
      commit('incrementar', 20)
    },
    accionDecrecimiento({ commit }, numero) {
      commit('decrecer', numero)
    },
    accionButton({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      }
      else {
        commit('decrecer', objeto.numero)
      }
    }
  },
  modules: {
  }
})
