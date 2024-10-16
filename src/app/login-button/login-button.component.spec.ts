import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginButtonComponent } from './login-button.component';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from '@auth0/auth0-angular';

// import { NavBarComponent } from './nav-bar.component';

// describe('NavBarComponent', () => {
//   let component: NavBarComponent;
//   let fixture: ComponentFixture<NavBarComponent>;
//   let authServiceSpy: jasmine.SpyObj<AuthService>;

//   beforeEach(() => {
//     authServiceSpy = jasmine.createSpyObj('AuthService', ['loginWithRedirect']);

//     TestBed.configureTestingModule({
//       declarations: [],
//       providers: [{ provide: AuthService, useValue: authServiceSpy }],
//       imports: [RouterTestingModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(NavBarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
