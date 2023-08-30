import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable({providedIn: 'root'})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()
  ingredients: Ingredient[] = [
    {name: 'Apples', amount: 5},
    {name: 'Tomatoes', amount: 5},
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient, ingredients?: Ingredient[]) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      let index: number;
      for (const [i, ingredientStock] of this.ingredients.entries()) {
        if (ingredientStock.name === ingredient.name) index = i;
      }
      if (index) {
        this.ingredients[index].amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients);
  }
}
