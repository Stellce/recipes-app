import { Component } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    {name: 'Apples', amount: 5},
    {name: 'Tomatoes', amount: 5},
  ];

  onIngredientAdded(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
  }

}
