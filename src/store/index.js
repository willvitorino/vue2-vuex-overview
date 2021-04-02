import Vue from 'vue'
import Vuex from 'vuex'

import CoinModule from './coin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { CoinModule }
})
