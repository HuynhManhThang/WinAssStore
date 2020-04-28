/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotFoudComponent } from './notFoud.component';

describe('NotFoudComponent', () => {
  let component: NotFoudComponent;
  let fixture: ComponentFixture<NotFoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
