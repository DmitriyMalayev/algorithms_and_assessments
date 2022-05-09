function maxProfit(prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let tempProfit = prices[i + 1] - prices[i];
    if (tempProfit > 0) {
      if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if (prices[i + 1] - buyPrice > profit) {
        profit = prices[i + 1] - buyPrice;
      }
    }
  }
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);

function maxProfit2(prices) {
  let buyPrice = prices[0]; //Original Price    7
  let profit = 0; //Keeping Track of Profit   0

  //Determine if there is profit. Use - 1 so we don't iterate a value pair that doesn't exist.
  for (let i = 0; i < prices.length - 1; i++) {
    let tempProfit = prices[i + 1] - prices[i]; //Compare Sell - Buy
    if (tempProfit > 0) {
      //-6, 4
      if (prices[i] < buyPrice) {
        buyPrice = prices[i]; //overwriting buy price if there is profit
      }
      if (prices[i + 1] - buyPrice > profit) {
        //5 - 1 > 4
        profit = prices[i + 1] - buyPrice;
      }
    }
  }
  return profit;
}

maxProfit2([7, 1, 5, 3, 6, 4]);

/*
Space Complexity = O(1) 
  We're only keeping track of profit
Time Complexity = O(N)^2
  Comparing each value with every other. 
  Handshake? 
*/
