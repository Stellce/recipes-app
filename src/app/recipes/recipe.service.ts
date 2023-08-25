import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

// @Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
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
      id: 2,
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
  recipeUpdateListener = new Subject<Recipe>()
  // selectedRecipe: Recipe;

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeUpdateListener() {
    return this.recipeUpdateListener.asObservable();
  }

  findRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

}
