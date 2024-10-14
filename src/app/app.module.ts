import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { HomePageModule } from './home-page/home-page.module';
import { LoginButtonModule } from './login-button/login-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    LoginButtonModule
  ],
  providers: [provideAuth0({
    domain: 'http://localhost:3000',
    clientId: 'gS3C20Vt9iT7qy2yprLHjw7SuK8IDWjQ',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
