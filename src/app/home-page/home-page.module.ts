import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '@auth0/auth0-angular';

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
  providers: [AuthService],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
