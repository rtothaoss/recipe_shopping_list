import { Recipe } from './receipe.model'
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
            [
                new Ingredient('Cherry Tomatoes', 5),
                new Ingredient('Onions', 1)
            ]), 
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
            [
                new Ingredient('Cherry Tomatoes', 5),
                new Ingredient('Onions', 1)
            ]) 
      ]

      constructor(private slService: ShoppingListService) { }

      getRecipes() {
          return this.recipes.slice() //this allows only a copy of recipes with the splice 
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
      }
}