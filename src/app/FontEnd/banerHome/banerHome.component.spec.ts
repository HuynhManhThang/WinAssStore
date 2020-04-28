/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BanerHomeComponent } from './banerHome.component';

describe('BanerHomeComponent', () => {
  let component: BanerHomeComponent;
  let fixture: ComponentFixture<BanerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
