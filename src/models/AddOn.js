export default class AddOn {
  constructor(name, prices, checked){
    this.name = name;
    this.prices = prices;
    this.checked = checked;
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
          return part.personPrice;
        else
          return part.oldPersonPrice;
      }
    }
    return this.prices[this.prices.length - 1].oldPersonPrice || this.prices[this.prices.length - 1].personPrice;
  }
}