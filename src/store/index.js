import { createStore } from 'vuex'

export default createStore({
  state: {
    postRoute: 'http://localhost:3000/posts/',
    userRoute: 'http://localhost:3000/users/',
    componentKey: 0
  },
  mutations: {
    FORCE_RERENDER(state) {
      state.componentKey += 1;
    }
  },
  actions: {
    forceRerender({commit}) {
      commit('FORCE_RERENDER')
    }
  },
  modules: {
  }
})
