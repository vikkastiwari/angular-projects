import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrefComponent } from './href.component';

describe('HrefComponent', () => {
  let component: HrefComponent;
  let fixture: ComponentFixture<HrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
