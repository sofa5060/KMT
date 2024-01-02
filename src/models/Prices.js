export default class Prices {
  // [{
  //   minSize: 1,
  //   maxSize: 2,
  //   personPrice: 100,
  //   oldPersonPrice: 0
  // }]
  constructor(prices){
    this.prices = prices;
  }

  getPrice(guestsNum){
    for(let i = 0; i < this.prices.length; i++){
      let part = this.prices[i];
      // if range matches return the price
      if(guestsNum <= part.maxSize && guestsNum >= part.minSize){
        return part.personPrice;
      }
    }
    return this.prices[this.prices.length - 1].personPrice;
  }

  getOldPrice(guestsNum){
    for(let i = 0; i < this.prices.length; i++){
      let part = this.prices[i];
      // if range matches return the price
      if(guestsNum <= part.maxSize && guestsNum >= part.minSize){
        if(!part.oldPersonPrice || part.oldPersonPrice === 0)
          return 0;
        else
          return part.oldPersonPrice;
      }
    }
    return this.prices[this.prices.length - 1].oldPersonPrice || 0;
  }
}