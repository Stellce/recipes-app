import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipes/recipe-item/recipe-item.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipesComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent},
      // {path: 'recipe-detail', component: RecipeDetailComponent},
      // {path: 'recipe-edit', component: Recipe}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
