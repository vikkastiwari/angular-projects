import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username should be same as of service',() => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.name).toEqual(component.userName);
  });

  it('username should be displayed if user is loggedin',() => {
    let compiled = fixture.debugElement.nativeElement;
    component.loggedIn = true;
    expect(compiled.querySelector('div').textContent).toContain(component.userName);
  });

  it('username should not be displayed if user is not loggedin',() => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).not.toContain(component.userName);
  });
});
