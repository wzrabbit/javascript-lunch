type Restaurant = {
  category: string;
  name: string;
  distance: string;
  description: string;
  link: string;
};

class Restaurants {
  #restaurants: Restaurant[] = [];

  addRestaurant(restaurant: Restaurant) {
    this.#restaurants.push(restaurant);
  }

  getRestaurants() {
    return this.#restaurants;
  }

  sortByName() {
    return [...this.#restaurants].sort((x, y) => x.name.localeCompare(y.name));
  }

}
export default Restaurants;
