import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseGetComponent } from './pizza/base-get/base-get.component';
import { ToppingGetComponent } from './pizza/topping-get/topping-get.component';

const routes: Routes = [
  {path:'pizza/base-get',component:BaseGetComponent},
  {path:'pizza/topping-get',component:ToppingGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
