import {Recipe} from "./recipe.model";
// @Injectable({providedIn: 'root'})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Test Recipe',
      desc: 'test desc',
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
      id: 2,
      name: 'Another test Recipe',
      desc: 'test desc',
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

  getRecipe(id: number) {
    return this.recipes.find((recipe) => {
      return recipe.id === id;
    });
  }

  findRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id === +id);
  }

}
