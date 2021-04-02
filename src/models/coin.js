export default class Coin {
  constructor (currency) {
    this.code = currency.code
    this.description = currency.description
    this.rate = currency.rate
    this.rateFloat = currency.rate_float
    this.symbol = currency.symbol
  }
}
