import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { Config } from 'src/config';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    Config, 
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}
  ],
})
export class CoreModule { }
