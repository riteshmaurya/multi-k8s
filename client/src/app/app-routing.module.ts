import { FibComponent } from './fib/fib.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherPageComponent } from './other-page/other-page.component';

const routes: Routes = [
  {
    path: 'otherpage',
    component: OtherPageComponent
  },
  {
    path: '',
    component: FibComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
