import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T10Component } from './t10.component';

describe('T10Component', () => {
  let component: T10Component;
  let fixture: ComponentFixture<T10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
