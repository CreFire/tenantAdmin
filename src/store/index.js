import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  getters
});

export default store
