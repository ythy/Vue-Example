import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter';
import login from './modules/login';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    login,
  },
  strict: debug
})

