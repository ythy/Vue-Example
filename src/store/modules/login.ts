import Vue from 'vue'
import Vuex from 'vuex'


interface LoginState {
  count2: number;
}

// root state object.
// each Vuex instance is just a single state tree.
const state: LoginState = {
  count2: 0
}


// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  namespaced: true,
  state,
}