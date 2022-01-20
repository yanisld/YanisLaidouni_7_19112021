import { createStore } from 'vuex'

export default createStore({
  state: {
    postRoute: 'http://localhost:3000/posts/',
    userRoute: 'http://localhost:3000/users/',
    componentKey: 0,
    edit: false
  },
  mutations: {
    FORCE_RERENDER(state) {
      state.componentKey += 1;
    },
    SHOW_EDIT(state){
      state.edit = true
    },
    CLOSE_EDIT(state){
      state.edit = false
    }
  },
  actions: {
    forceRerender({commit}) {
      commit('FORCE_RERENDER')
    },
    showEdit({commit}){
      commit('SHOW_EDIT');
      commit('FORCE_RERENDER')
    },
    showPostEdit({commit}){
      commit('SHOW_EDIT')
    },
    closeEdit({commit}){
      commit('CLOSE_EDIT')
    }
  },
  modules: {
  }
})
