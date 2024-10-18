

function buyAndSell (prices) {
    let buyPrice = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(buyPrice > prices[i]){
            buyPrice = prices[i];
        }
        else {
            profit = Math.max(profit, (prices[i] - buyPrice))
        }
    }
    return profit;
}

let prices = [7, 1, 5, 3, 6, 4];
let profit = buyAndSell(prices)
console.log(profit);