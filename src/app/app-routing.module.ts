import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components';
import { RouterComponent } from './components/router/router.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: RouterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
