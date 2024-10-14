import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LoginButtonComponent } from './login-button.component';

@NgModule({
  declarations: [
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    LoginButtonComponent
  ],
  providers: [],
  bootstrap: [LoginButtonComponent]
})
export class LoginButtonModule { }
