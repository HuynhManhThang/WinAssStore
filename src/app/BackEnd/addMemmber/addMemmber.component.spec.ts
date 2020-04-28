/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddMemmberComponent } from './addMemmber.component';

describe('AddMemmberComponent', () => {
  let component: AddMemmberComponent;
  let fixture: ComponentFixture<AddMemmberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemmberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemmberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
