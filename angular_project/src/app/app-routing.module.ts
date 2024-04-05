import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ProductComponent} from './product/product/product.component';
import {ItemDetailsComponent} from './item-details/item-details/item-details.component';

export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'products', component: ProductComponent },
 { path: 'product/:id/details', component: ItemDetailsComponent}];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
