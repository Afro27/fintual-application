const { Portfolio } = require('./portfolio');
const { Stock } = require('./stock');

const stockA = new Stock(1000);
const stockB = new Stock(2000);
const stockC = new Stock(3000);

const portfolio = new Portfolio();
portfolio.addStock(stockA, 10);
portfolio.addStock(stockB, 5);
portfolio.addStock(stockC, 1);

portfolio.Profit('2024-01-01', '2024-12-31');
