import { exportDefaultSpecifier } from '@babel/types'
import { createStore } from 'vuex'

export default createStore({
  state: {
    accountBalance: 0,
  },
  getters: {
  },
  mutations: {
    upgradeBalanceMutation(state, payload) {
      state.accountBalance = state.accountBalance + payload
    }
  },
  actions: {
    buttonUpgradeAction({ commit }, { data }) {
      if (data.state) {
        upgrade()
      }
      else {

      }
    }
  },
  modules: {
  }
})
