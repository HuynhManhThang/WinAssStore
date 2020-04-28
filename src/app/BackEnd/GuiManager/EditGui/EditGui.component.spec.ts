/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditGuiComponent } from './EditGui.component';

describe('EditGuiComponent', () => {
  let component: EditGuiComponent;
  let fixture: ComponentFixture<EditGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
