import { createStore } from 'vuex'

export default createStore({
  state: {
    postRoute: 'http://localhost:3000/posts/',
    userRoute: 'http://localhost:3000/users/',
    componentKey: 0,
    logged: false
  },
  mutations: {
    FORCE_RERENDER(state) {
      state.componentKey += 1;
    },
    IS_LOGGED(state){
      if(localStorage.getItem('name')){
        state.logged = true
      }
    }
  },
  actions: {
    forceRerender({commit}) {
      commit('FORCE_RERENDER')
    },
    isLogged({commit}) {
      commit('IS_LOGGED')
    }
  },
  modules: {
  }
})
