import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestvalidComponent } from './testvalid/testvalid.component'; //first page display carousel
import { HeaderComponent } from './header/header.component'; //second page display register wedding
import { DisplayweddingComponent } from './displaywedding/displaywedding.component'; //third display data
import {ListbirthComponent} from './listbirth/listbirth.component';

const appRoutes: Routes=[
  {path:'', component: TestvalidComponent},
  {path:'register', component: HeaderComponent},
  {path:'displayRegister', component: DisplayweddingComponent},
  {path:'tarikh', component: ListbirthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],

  providers:[]
})

export class AppRoutingModule {}
 