import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T9Component } from './t9.component';

describe('T9Component', () => {
  let component: T9Component;
  let fixture: ComponentFixture<T9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
