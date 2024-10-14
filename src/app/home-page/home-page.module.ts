import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
