export default class SearchQuery {
  constructor(searchQuery, date, guests, isSelectedCity = false, Destinations = [], durations = [], ratings = [], priceRange = [0, 1000]) {
    if(isSelectedCity){
      this.Destinations = [searchQuery, ...Destinations]
    }else{
      this.Destinations = Destinations;
    }
    this.searchQuery = searchQuery;
    this.date = date;
    this.guests = guests;
    this.isSelectedCity = isSelectedCity;
    this.durations = durations;
    this.ratings = ratings;
    this.priceRange = priceRange;
  }

  setDate(date) {
    this.date = date;
  }

  setGuests(guests) {
    if(guests < 1) guests = 1;
    this.guests = guests;
  }

  addDestination(destination) {
    this.Destinations.push(destination);
  }

  removeDestination(destination) {
    this.Destinations = this.Destinations.filter((dest) => dest !== destination);
  }

  addToDurations(duration) {
    this.durations.push(duration);
  }

  removeFromDurations(duration) {
    this.durations = this.durations.filter((dur) => dur !== duration);
  }

  addToRatings(rating) {
    this.ratings.push(rating);
  }

  removeFromRatings(rating) {
    this.ratings = this.ratings.filter((rat) => rat !== rating);
  }

  setPriceRange(priceRange) {
    this.priceRange = priceRange;
  }
}