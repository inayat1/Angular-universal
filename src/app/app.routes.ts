import { Routes, RouterModule } from '@angular/router';
import { Fru } from './fruits/fruits.component';
import { Test } from './test/test.component';
import { List } from './landing/landing.component';

const Route_Const:Routes=[
  {path:'', redirectTo:'landing', pathMatch:'full'},
  {path:'frucomp', component: Fru},
  {path:'landing', component: List},
  {path:'test', component: Test}
]

export const routing = RouterModule.forRoot(Route_Const)
