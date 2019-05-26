const ItemController = (function() {
    function Item(id, meal, calories) {
        this.id = id;
        this.meal = meal;
        this.calories = calories;
    }

    const data = {
        items: [
            new Item(0, 'Steak Dinner', 1200),
            new Item(1, 'Cookie', 400),
            new Item(2, 'Eggs', 300)
        ],
        currentItem: null,
        totalCalories: 1900
    };

    return {
        getData() {
            return data;
        }
    };
})();


export default ItemController;
