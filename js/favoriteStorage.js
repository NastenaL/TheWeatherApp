class FavoriteStorage {
  constructor() {
    this.favorites = new Storage();
  }

  get() {
    return favorites.getItem("favorites");
  }

  update(items) {
    favorites.setItem("favorites", JSON.stringify(items));
  }
}
