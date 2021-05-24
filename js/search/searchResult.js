class SearchResult {
    constructor(city, isFavorite){
        this.city = city;
        this.isFavorite = isFavorite;
    }

    static changeFavoriteStatus(item){
        item.isFavorite = !item.isFavorite;
    }
}