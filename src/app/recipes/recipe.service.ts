import {Recipe} from "./recipe.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    {
      name: 'Test Recipe',
      description: 'test desc',
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
      description: 'test desc',
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

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  // findRecipe(id: number) {
  //   return this.recipes.find(recipe => recipe.id === +id);
  // }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
