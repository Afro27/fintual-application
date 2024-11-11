class Stock {
  constructor(range) {
    this.range = range || 1000 // Range of values the stock can have
    this.prices = {};
  }

  Price(date) {
    if (this.prices[date]) {
      return this.prices[date];
    }
    const price = Math.random() * this.range;
    this.prices[date] = price;
    return price;
  }
}

module.exports = {
  Stock
};