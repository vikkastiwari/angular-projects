import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Config } from '../../config';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private config: Config) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        this.config.db,
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        this.config.db
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
