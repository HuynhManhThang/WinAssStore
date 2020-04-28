/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCartComponent } from './ListCart.component';

describe('ListCartComponent', () => {
  let component: ListCartComponent;
  let fixture: ComponentFixture<ListCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
