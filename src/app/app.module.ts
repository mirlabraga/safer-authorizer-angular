import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as ProvideAuth0 from "@auth0/auth0-angular";

import { LoginButtonModule } from './login-button/login-button.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginButtonModule,
    FooterComponent,
    ProvideAuth0.AuthModule.forRoot({
      domain: 'dev-q7rj5o44.us.auth0.com',
      clientId: 'BmCXzhkVGyzU9SH2n6EpqRQSBVabiPth',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "https://dev-q7rj5o44.us.auth0.com/api/v2/"
      },
      errorPath: "/error"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
