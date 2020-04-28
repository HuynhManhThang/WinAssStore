/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListGuiComponent } from './ListGui.component';

describe('ListGuiComponent', () => {
  let component: ListGuiComponent;
  let fixture: ComponentFixture<ListGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
