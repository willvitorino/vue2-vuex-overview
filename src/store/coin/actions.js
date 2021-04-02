import axios from 'axios'

export default {
  getCurrentPrice ({ commit }) {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => {
      commit('setCurrentPrice', res.data)
    }).catch(error => {
      console.error(error)
    })
  }
}
