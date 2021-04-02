import Vue from 'vue'

import Coin from '@/models/coin'

export default {
  setCurrentPrice (state, data) {
    Object.values(data.bpi).map(coin => {
      Vue.set(state.coins, coin.code, new Coin(coin))
    })
  }
}
