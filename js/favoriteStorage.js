class FavoriteStorage {

    constructor(){
        this.favorites = new Storage();
    }

    addItem(items){
        favorites.saveTo('favorites', JSON.stringify(items));
    }
}