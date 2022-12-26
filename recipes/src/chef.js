var Recipe = require('../src/recipe.js');

class Chef {
    constructor(name, recipes) {
        this.name = name;
        this.recipeBox = recipes;
    }
    tryRecipe(recipe, rating) {
        for (var i = 0; i < this.recipeBox.length; i++) {
            if (this.recipeBox[i].name === recipe) {
                this.recipeBox[i].attempted = true;
                this.recipeBox[i].rating = rating;
            }
        }
    }
    addRecipe(name, ingredients) {
        var recipe = new Recipe({name: name, ingredients: ingredients})
        this.recipeBox.push(recipe);
    }
    changeRecipe(recipe, ingredient, qty) {
        for (var i = 0; i < this.recipeBox.length; i++) {
            if (this.recipeBox[i].name === recipe) {
                for (var j = 0; j < this.recipeBox[i].ingredients.length; j++) {
                    if (this.recipeBox[i].ingredients[j].name === ingredient) {
                        this.recipeBox[i].ingredients[j].amount = qty;
                    }
                }
            }
        }
    }
}

module.exports = Chef;
