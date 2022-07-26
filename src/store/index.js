import Vue from "vue";
import Vuex from "vuex";
// import 'es6-promise/auto';
import auth from './modules/auth'

Vue.use( Vuex );

export const store = new Vuex.Store( {
  state: {
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
  }
} );

