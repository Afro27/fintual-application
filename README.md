# Fintual Application Code

## Bastian Hilcker

### Prompt  
Create a simple `Portfolio` class that contains a collection of `Stock` objects and includes a `Profit` method. This method should accept two dates and return the portfolio’s profit between those dates. Assume that each `Stock` has a `Price` method that takes a date as input and returns the stock’s price on that date.  

**Bonus Track**: Implement functionality to calculate the **annualized return** of the portfolio between the given dates.

---

Class Portfolio is in portfolio.js.

test.js and stock.js made for testing only.

### Test  

Run the following command to test the code:  

```bash
node test.js
```

Example output:
```bash

Portfolio value at 2024-01-01T00:00:00.000Z: $9792.48
Portfolio value at 2024-12-31T00:00:00.000Z: $14903.54


Profit: $5111.06

Annualized Return: 52.19%
```

Made with node v18.20.2