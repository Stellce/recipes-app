import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    {name: 'Test Recipe', desc: 'test desc', imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"},
    {name: 'Another test Recipe', desc: 'test desc', imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"},
  ];

  selectedRecipe: Recipe;

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
