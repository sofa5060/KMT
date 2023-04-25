export default class SearchQuery {
  constructor(
    searchQuery,
    date,
    guests = 1,
    isSelectedCity = false,
    destinations = [],
    durations = [],
    ratings = [],
    priceRange = [0, 1000]
  ) {
    this.searchQuery = searchQuery;
    this.date = date;
    this.guests = guests;
    this.isSelectedCity = isSelectedCity;
    this.destinations = destinations;
    this.durations = durations;
    this.ratings = ratings;
    this.priceRange = priceRange;
  }

  generateNewObj() {
    return new SearchQuery(
      this.searchQuery,
      this.date,
      this.guests,
      this.isSelectedCity,
      this.destinations,
      this.durations,
      this.ratings,
      this.priceRange
    );
  }

  setSearchQuery(searchQuery) {
    this.searchQuery = searchQuery;
  }

  setIsSelectedCity(isSelectedCity) {
    this.isSelectedCity = isSelectedCity;
  }

  setDate(date) {
    this.date = date;
  }

  setGuests(guests) {
    if (guests < 1) guests = 1;
    this.guests = guests;
  }

  addDestination(destination) {
    this.destinations.push(destination);
  }

  removeDestination(destination) {
    this.destinations = this.destinations.filter(
      (dest) => dest !== destination
    );
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
    console.log("called")
    this.priceRange = priceRange;
  }
}
