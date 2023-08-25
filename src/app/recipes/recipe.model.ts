import {Ingredient} from "../shared/ingredient.model";

export interface Recipe {
  id: number;
  name: string;
  desc: string;
  imagePath: string
  ingredients: Ingredient[]
}
