import {Ingredient} from "../shared/ingredient.model";

export interface Recipe {
  name: string;
  desc: string;
  imagePath: string
  ingredients: Ingredient[]
}
