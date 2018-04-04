import Vue from 'vue'
import Vuex from 'vuex'


interface CounterState{
  count: number;
}

// root state object.
// each Vuex instance is just a single state tree.
const state: CounterState = {
  count: 12
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations: Vuex.MutationTree<CounterState> = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions: Vuex.ActionTree<CounterState, CounterState> = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: (state:CounterState) => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

