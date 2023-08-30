import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  index: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.index = +params.id;
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    )
  }

  onAddIngredients() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }
}
