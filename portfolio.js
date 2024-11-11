const YEAR_MS = 1000 * 60 * 60 * 24 * 365;

class Portfolio {
  constructor() {
    this.stocks = [];
  }

  addStock(stock, quantity) {
    this.stocks.push({
      stock,
      quantity
    });
  }

  Profit(startDate, endDate) {
    try {
      let startValue = 0;
      let endValue = 0;
  
      this.stocks.forEach(stock => {
        const stockObject = stock.stock;
        const quantity = stock.quantity;
        startValue += stockObject.Price(startDate) * quantity;
        endValue += stockObject.Price(endDate) * quantity;
      });
  
      const profit = endValue - startValue;
  
      // Annualized return
      const start = new Date(startDate);
      const end = new Date(endDate);
      const years = (end - start) / YEAR_MS;
      const annualizedReturn = years > 0 ? ((endValue / startValue) ** (1 / years)) - 1 : 0;
  
      console.log(`\nPortfolio value at ${start.toISOString()}: $${startValue.toFixed(2)}`);
      console.log(`Portfolio value at ${end.toISOString()}: $${endValue.toFixed(2)}\n`);
      console.log(`\nProfit: $${profit.toFixed(2)}`);
      console.log(`\nAnnualized Return: ${(annualizedReturn * 100).toFixed(2)}%\n`);
  
      return { profit, annualizedReturn };
    } catch (err) {
      console.log("Invalid dates")
      return { profit: false, annualizedReturn: false}
    }
  }
}

module.exports = {
  Portfolio
};