import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegisterComponent } from './register/register.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListService } from './hero-list/hero-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    RegisterComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [HeroListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
