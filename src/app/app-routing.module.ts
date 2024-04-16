import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChildComponent } from './child/child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MoviesComponent } from './movies/movies.component';
import { PawanRajaComponent } from './pawan-raja/pawan-raja.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {//nested loop
    path: 'aboutus',
    component: AboutusComponent
  },
  // {
  //   path: '',
  //   // component:AboutusComponent
  //   redirectTo: 'aboutus',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: ChildComponent
  },
  {
    path: 'movie',
    component: MoviesComponent,

    children: [

      //parent child
      // {
      //   path: '',
      //   component: MoviesComponent


      // },
      {
        path: 'pawanraja',
        component: PawanRajaComponent
      }
    ]

  }
  , {
    path: "**",
    component: PagenotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
