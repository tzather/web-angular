import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ControlsModule } from 'src/controls/controls.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ControlsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login', async () => {
    let identityService = jasmine.createSpyObj("IdentityService", ["login"]);
    let router = jasmine.createSpyObj("Router", ["navigate"]);
    identityService.login = async (m: any) => { return; };
    router.navigate = (m: any) => { return; };
    component = new LoginComponent(identityService, router);
    await expect(component.login()).toBeTruthy();
  });

});
