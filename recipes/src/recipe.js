class Recipe {
    constructor(object) {
        this.name = object.name;
        this.ingredients = object.ingredients;
        this.attempted = false;
        this.rating;
    }
    rateRecipe(rating) {
        this.rating = rating;
        this.attempted = true;
    }
    changeIngredientAmount(ingredient, amount) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === ingredient) {
                this.ingredients[i].amount = amount;
            }
        }
    }
    generateGroceryList() {
        var list = 'You need:';
        for (var i = 0; i < this.ingredients.length; i++) {
            list += ` ${this.ingredients[i].amount} ${this.ingredients[i].name},`;
        }
        return list;
    }
}

module.exports = Recipe;
