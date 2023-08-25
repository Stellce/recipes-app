import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  @Input('recipe') recipe: Recipe;
  id = this.route.snapshot.params.id;
  idSub = new Subscription();

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.idSub = this.route.params.subscribe((params: Params) => {
    //     console.log('subscribed')
    //     this.id = params.id
    //     console.log(params)
    //     this.recipe = this.recipeService.findRecipe(this.id);
    //   }
    // )
  }

  onAddIngredients() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    console.log(this.route);
  }
}
