/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let sell = -1
    let profit = 0
    
    for(let i = 1 ; i < prices.length ; i++){
        if(prices[i] < buy){
           buy = prices[i]
           sell = -1
        }else if(prices[i] > sell ){
            sell = prices[i]
           if( profit < sell - buy){
              profit = sell - buy
             }
        }
    }
    
    
    
    return profit
    
    
};
