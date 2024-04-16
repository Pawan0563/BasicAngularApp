import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayComponentBindingComponent } from './two-way-component-binding/two-way-component-binding.component';
import { ChildComponent } from './child/child.component';
import { ChangeColorDirective } from './change-color.directive';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MoviesComponent } from './movies/movies.component';
import { PawanRajaComponent } from './pawan-raja/pawan-raja.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponentBindingComponent,
    ChildComponent,
    ChangeColorDirective,
    AboutusComponent,
    PagenotfoundComponent,
    MoviesComponent,
    PawanRajaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
