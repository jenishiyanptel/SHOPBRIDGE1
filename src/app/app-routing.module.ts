import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { ViewItemComponent } from './view-item/view-item.component';


const routes: Routes = [
  {path:'AddProduct',component:AddProductComponent},
   {path:'view-item',component:ViewItemComponent}
  // {path:'products',component:ProductsComponent},
  // {path:'investors',component:InvestorsComponent},
   
  // { path: '**', redirectTo: 'home', pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
