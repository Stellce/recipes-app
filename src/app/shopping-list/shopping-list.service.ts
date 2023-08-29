import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    {name: 'Apples', amount: 5},
    {name: 'Tomatoes', amount: 5},
  ];

  getIngredients() {
    return this.ingredients.slice();
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
}
