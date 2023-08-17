import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";

// @Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Test Recipe',
      desc: 'test desc',
      imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272",
      ingredients: [
        {
          name: 'avocado',
          amount: 3
        },
        {
          name: 'meat',
          amount: 1
        }
      ]
    },
    {
      name: 'Another test Recipe',
      desc: 'test desc',
      imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272",
      ingredients: [
        {
          name: 'Buns',
          amount: 2
        },
        {
          name: 'meat',
          amount: 1
        }
      ]
    },
  ];
  recipeSelected = new EventEmitter<Recipe>();
  // selectedRecipe: Recipe;

  getRecipes() {
    return this.recipes.slice();
  }

}
