/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductTvComponent } from './ProductTv.component';

describe('ProductTvComponent', () => {
  let component: ProductTvComponent;
  let fixture: ComponentFixture<ProductTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
