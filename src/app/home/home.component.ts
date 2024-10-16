import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, NgIf } from '@angular/common';
import { HomeContentComponent } from '../home-content/home-content.component';
import { HeroComponent } from '../hero/hero.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    HomeContentComponent,
    HeroComponent,
    LoadingComponent,
    AsyncPipe,
    NgIf
  ]
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}
